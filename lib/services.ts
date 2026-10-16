// Service data for the homepage overview and the future /services page.
export type Service = {
  title: string;
  summary: string;
};

export const services: Service[] = [
  {
    title: "Web Design",
    summary:
      "Clear, good-looking layouts that help visitors find what they need and take the next step.",
  },
  {
    title: "Web Development",
    summary:
      "Fast, accessible websites built on modern tools, with content your team can update easily.",
  },
  {
    title: "Brand Strategy",
    summary:
      "Positioning, messaging, and visual identity that give your business a recognizable voice.",
  },
];
