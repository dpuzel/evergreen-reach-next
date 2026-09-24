import { Contact } from "@/components/Contact";
import { FieldNotesTeaser } from "@/components/FieldNotesTeaser";
import { Hero } from "@/components/Hero";
import { Plans } from "@/components/Plans";
import { PorchInvite } from "@/components/PorchInvite";
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
        <PorchInvite />
        <Plans />
        <Stories />
        <FieldNotesTeaser />
        <Contact />
      </main>
    </SiteShell>
  );
}
