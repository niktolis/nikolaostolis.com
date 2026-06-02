#!/usr/bin/env node

/**
 * Regenerates the "Project structure" section in README.md
 * by scanning the tracked directories in the repository.
 *
 * Usage:  node scripts/update-readme-structure.mjs
 */

import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, relative } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname.replace(/\/$/, "");
const README = join(ROOT, "README.md");

// Directories to include in the tree (relative to repo root).
const INCLUDE = ["src", "public", "scripts", ".devcontainer", ".github"];

const START_MARKER = "<!-- PROJECT_STRUCTURE_START -->";
const END_MARKER = "<!-- PROJECT_STRUCTURE_END -->";

async function tree(dir, prefix = "") {
  const entries = await readdir(dir, { withFileTypes: true });
  entries.sort((a, b) => {
    // directories first, then alphabetical
    if (a.isDirectory() !== b.isDirectory()) return a.isDirectory() ? -1 : 1;
    return a.name.localeCompare(b.name);
  });

  const lines = [];
  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i];
    const isLast = i === entries.length - 1;
    const connector = isLast ? "└── " : "├── ";
    const child = isLast ? "    " : "│   ";

    if (entry.isDirectory()) {
      lines.push(`${prefix}${connector}${entry.name}/`);
      const sub = await tree(join(dir, entry.name), `${prefix}${child}`);
      lines.push(...sub);
    } else {
      lines.push(`${prefix}${connector}${entry.name}`);
    }
  }
  return lines;
}

async function buildTree() {
  const lines = [];
  for (const dir of INCLUDE) {
    const abs = join(ROOT, dir);
    lines.push(`${dir}/`);
    const sub = await tree(abs, "  ");
    lines.push(...sub);
  }
  return lines.join("\n");
}

const treeOutput = await buildTree();

const readme = await readFile(README, "utf8");

const startIdx = readme.indexOf(START_MARKER);
const endIdx = readme.indexOf(END_MARKER);

if (startIdx === -1 || endIdx === -1) {
  console.error(
    `ERROR: Could not find ${START_MARKER} and ${END_MARKER} markers in README.md`
  );
  process.exit(1);
}

const before = readme.slice(0, startIdx + START_MARKER.length);
const after = readme.slice(endIdx);

const updated = `${before}\n\n\`\`\`\n${treeOutput}\n\`\`\`\n\n${after}`;

if (updated === readme) {
  console.log("README.md project structure is already up to date.");
} else {
  await writeFile(README, updated, "utf8");
  console.log("README.md project structure updated.");
}
