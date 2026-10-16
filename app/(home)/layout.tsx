import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

// Dark header and page background for the homepage
export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader tone="dark" />
      <main id="main-content" className="flex-1 bg-night">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
