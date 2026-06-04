type ButtonVariant = "primary" | "secondary";

interface HeroLink {
  label: string;
  href: string;
  variant?: ButtonVariant;
  target?: "_blank";
}

export const hero = {
  eyebrow: "Software Architecture · Embedded Software · Automotive Systems",
  title:
    "Engineering reliable software for complex automotive and embedded systems.",
  lead: "I am an embedded software engineer focused on AUTOSAR Classic, diagnostics, real-time systems, Linux, cloud-connected workflows, and software architecture for automotive platforms.",
  links: [
    {
      label: "Contact me",
      href: "/contact",
      variant: "primary",
    },
    {
      label: "GitHub",
      href: "https://github.com/niktolis",
      target: "_blank",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/niktolis",
      target: "_blank",
    },
  ] satisfies HeroLink[],
} as const;

export const expertise = [
  {
    title: "Embedded & real-time software",
    body: "C/C++, RTOS concepts, MCU bring-up, diagnostics, boot/update flows, and production-grade embedded software design.",
  },
  {
    title: "Automotive platforms",
    body: "AUTOSAR Classic, UDS diagnostics, CAN/CAN FD, Ethernet-related integration, safety-oriented development, and platform software delivery.",
  },
  {
    title: "Architecture & technical leadership",
    body: "System decomposition, cross-team integration, technical decision-making, requirements clarification, and pragmatic delivery under constraints.",
  },
] as const;

export const focusAreas = [
  {
    title: "Automotive ECU and platform software",
    body: "Work across embedded platforms, diagnostics, communication stacks, and integration topics for modern vehicle systems.",
  },
  {
    title: "Software-defined vehicle and open-source technologies",
    body: "Interest in Linux, Zephyr, cloud-connected tooling, reproducible development, and pragmatic use of open-source technologies in automotive contexts.",
  },
  {
    title: "Professional portfolio in progress",
    body: "This website is being built as a central place for my engineering profile, projects, writing, and future consulting or one-person company activities.",
  },
] as const;

export const contactCta = {
  title: "Let’s connect",
  body: "For now, reach me through GitHub, LinkedIn or Email.",
} as const;
