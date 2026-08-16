import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
