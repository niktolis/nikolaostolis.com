export type LinkTarget = "_blank";
export type ButtonVariant = "primary" | "secondary";

export interface NavigationLink {
  label: string;
  href: string;
}

export interface ActionLink {
  label: string;
  href: string;
  variant?: ButtonVariant;
  target?: LinkTarget;
  rel?: string;
}

export const site = {
  name: "Nikolaos Tolis",
  title: "Nikolaos Tolis | Embedded Software & Automotive Systems",
  description:
    "Personal website and professional portfolio of Nikolaos Tolis, embedded software engineer focused on automotive systems, AUTOSAR, Linux, cloud, and software architecture.",
  url: "https://nikolaostolis.com",
  domain: "nikolaostolis.com",
  footerText: "Built with Astro, Firebase Hosting, and Google Cloud.",
} as const;

export const navigationLinks = [
  {
    label: "CV",
    href: "/cv",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Writing",
    href: "/writing",
  },
  {
    label: "Contact",
    href: "/contact",
  },
] satisfies NavigationLink[];

export const socialLinks = {
  github: {
    label: "GitHub",
    href: "https://github.com/niktolis",
    target: "_blank",
  },
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/niktolis",
    target: "_blank",
  },
} satisfies Record<string, ActionLink>;

export const heroLinks: readonly ActionLink[] = [
  {
    label: "Contact me",
    href: "/contact",
    variant: "primary",
  },
  socialLinks.github,
  socialLinks.linkedin,
];
