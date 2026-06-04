# nikolaostolis.com

[![Firebase Hosting Live](https://github.com/niktolis/nikolaostolis.com/actions/workflows/firebase-hosting-live.yml/badge.svg)](https://github.com/niktolis/nikolaostolis.com/actions/workflows/firebase-hosting-live.yml)
[![Firebase Hosting Preview](https://github.com/niktolis/nikolaostolis.com/actions/workflows/firebase-hosting-preview.yml/badge.svg)](https://github.com/niktolis/nikolaostolis.com/actions/workflows/firebase-hosting-preview.yml)

Personal website and professional portfolio for Nikolaos Tolis, built with [Astro](https://astro.build) and hosted on [Firebase Hosting](https://firebase.google.com/docs/hosting).

**Live:** https://nikolaostolis.com

## Tech stack

| Layer              | Technology                                 |
| ------------------ | ------------------------------------------ |
| Framework          | Astro 6 (static output)                    |
| Hosting            | Firebase Hosting (`nikolaos-tolis-site`)   |
| CI/CD              | GitHub Actions (devcontainer-based builds) |
| DNS                | Cloudflare (DNS-only, no proxy)            |
| Formatting         | Prettier with `prettier-plugin-astro`      |
| Dependency updates | Dependabot (npm + GitHub Actions, weekly)  |

## Development environment

The repository ships a fully configured [Dev Container](https://containers.dev) — the recommended way to work on the project.

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/) (or a compatible container runtime)
- [VS Code](https://code.visualstudio.com/) with the [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

### Setup

1. Clone the repository.
2. Open the folder in VS Code.
3. When prompted, click **Reopen in Container** (or run `Dev Containers: Reopen in Container` from the command palette).

The container will:

- Start from the `mcr.microsoft.com/devcontainers/javascript-node:1-22-bookworm` base image (Node.js 22, Debian Bookworm).
- Install Firebase CLI (`firebase-tools@15.19.0`) globally.
- Install the GitHub CLI via the `ghcr.io/devcontainers/features/github-cli` feature.
- Run `npm ci` automatically on creation.
- Forward port `4321` for the Astro dev server.
- Persist Firebase auth config across rebuilds via a named Docker volume.

Included VS Code extensions: Astro, Prettier, ESLint, GitHub Pull Requests, and YAML support.

### Without Dev Container

Requires Node.js 22+ (see `.nvmrc`), npm, and Firebase CLI.

```bash
npm ci
```

## Available scripts

| Command                     | Description                                             |
| --------------------------- | ------------------------------------------------------- |
| `npm run dev`               | Start Astro dev server (port 4321)                      |
| `npm run build`             | Production build to `dist/`                             |
| `npm run preview`           | Preview the built site locally                          |
| `npm run format`            | Format all files with Prettier                          |
| `npm run format:check`      | Check formatting without writing                        |
| `npm run check`             | Format check + build (CI gate)                          |
| `npm run deploy`            | Build and deploy to live channel                        |
| `npm run deploy:preview`    | Build and deploy to a preview channel (7 day expiry)    |
| `npm run deploy:preview:pr` | Build and deploy to a PR preview channel (7 day expiry) |
| `npm run readme:structure`  | Regenerate the project structure tree in README.md      |

## Project structure

<!-- PROJECT_STRUCTURE_START -->

```
src/
  ├── components/
  │   ├── layout/
  │   │   ├── PageShell.astro
  │   │   ├── Section.astro
  │   │   ├── SiteFooter.astro
  │   │   └── SiteHeader.astro
  │   ├── ui/
  │   │   └── ButtonLink.astro
  │   └── ExpertiseCard.astro
  ├── layouts/
  │   └── BaseLayout.astro
  ├── pages/
  │   ├── contact.astro
  │   ├── cv.astro
  │   ├── index.astro
  │   ├── projects.astro
  │   └── writing.astro
  └── styles/
      ├── themes/
      │   ├── professional-dark.css
      │   ├── professional-light.css
      │   └── README.md
      ├── global.css
      ├── reset.css
      ├── theme.css
      └── tokens.css
public/
  └── favicon.svg
scripts/
  ├── cloudshell/
  │   ├── README.md
  │   ├── site-check-dns
  │   ├── site-check-firebase
  │   └── site-env
  └── update-readme-structure.mjs
.devcontainer/
  ├── fish/
  │   └── config.fish
  ├── devcontainer.json
  ├── Dockerfile
  └── starship.toml
.github/
  ├── workflows/
  │   ├── firebase-hosting-live.yml
  │   └── firebase-hosting-preview.yml
  └── dependabot.yml
```

<!-- PROJECT_STRUCTURE_END -->

## CI/CD

Two GitHub Actions workflows run builds inside the Dev Container image:

- **Live** — Triggered on push to `main`. Builds, checks, and deploys to the Firebase Hosting live channel.
- **Preview** — Triggered on pull requests to `main`. Builds and deploys a temporary preview channel for same-repo PRs. Forks and Dependabot PRs are build-only (no deploy).

Both workflows use pinned action SHAs and a Firebase service account secret (`FIREBASE_SERVICE_ACCOUNT_NIKOLAOS_TOLIS_SITE`).

A `cloudbuild.yaml` is also present as an alternative GCP-native build option.

## DNS

Managed in Cloudflare. All Firebase Hosting records must remain **DNS-only** (grey-cloud, not proxied).

`www.nikolaostolis.com` redirects to `nikolaostolis.com`.

## Cloud Shell helpers

Helper scripts in `scripts/cloudshell/` for verifying DNS propagation and Firebase Hosting domain status. See [scripts/cloudshell/README.md](scripts/cloudshell/README.md) for usage details.
