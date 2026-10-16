import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

// Light header for the inner pages (about, services, blog, contact)
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader tone="light" />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
