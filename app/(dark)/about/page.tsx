import type { Metadata } from "next";
import CallToAction from "@/components/CallToAction";
import AboutIntro from "@/components/about/AboutIntro";
import Story from "@/components/about/Story";
import Team from "@/components/about/Team";
import Values from "@/components/about/Values";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about the story, team, and values behind Summit Peak Studio, a small digital agency.",
};

export default function AboutPage() {
  return (
    <>
      <AboutIntro />
      <Story />
      <Values />
      <Team />
      <CallToAction />
    </>
  );
}
