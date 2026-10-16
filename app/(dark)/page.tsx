import type { Metadata } from "next";
import CallToAction from "@/components/CallToAction";
import FeaturedPosts from "@/components/FeaturedPosts";
import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import { siteConfig } from "@/lib/site";

// The layout's title template doesn't apply to the root page (same segment), so set the full title here
export const metadata: Metadata = {
  title: { absolute: `Digital work built on solid ground | ${siteConfig.name}` },
  description:
    "Summit Peak Studio is a small digital agency designing and building websites for businesses that want to be found, understood, and remembered.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <FeaturedPosts />
      <CallToAction />
    </>
  );
}
