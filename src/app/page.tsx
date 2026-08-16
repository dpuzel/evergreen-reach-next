import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Plans } from "@/components/Plans";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { SiteShell } from "@/components/SiteShell";
import { Stories } from "@/components/Stories";
import { Story } from "@/components/Story";

export default function Home() {
  return (
    <SiteShell>
      <main>
        <Hero />
        <Story />
        <Services />
        <Process />
        <Plans />
        <Stories />
        <Contact />
      </main>
    </SiteShell>
  );
}
