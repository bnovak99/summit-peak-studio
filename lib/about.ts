// Content for the About page. Fictional names and roles, with initials instead of photos.
export type Value = {
  title: string;
  summary: string;
};

export type TeamMember = {
  name: string;
  role: string;
  initials: string;
};

export const values: Value[] = [
  {
    title: "Clarity",
    summary:
      "We say what we mean, and we build sites that make sense at a glance.",
  },
  {
    title: "Craft",
    summary:
      "We sweat the details, from spacing and type to how fast a page loads.",
  },
  {
    title: "Partnership",
    summary:
      "We work alongside your team and share what we learn along the way.",
  },
];

export const team: TeamMember[] = [
  { name: "Maya Chen", role: "Creative Director", initials: "MC" },
  { name: "Eli Ramirez", role: "Lead Developer", initials: "ER" },
  { name: "Priya Shah", role: "Brand Strategist", initials: "PS" },
  { name: "Sam Okafor", role: "Project Manager", initials: "SO" },
];
