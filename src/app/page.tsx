import { Contact } from "@/components/Contact";
import { FieldNotesTeaser } from "@/components/FieldNotesTeaser";
import { Hero } from "@/components/Hero";
import { Plans } from "@/components/Plans";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { SiteShell } from "@/components/SiteShell";
import { Stories } from "@/components/Stories";
import { Story } from "@/components/Story";
import { absoluteUrl, homeUrl, site } from "@/lib/site";

export default function Home() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: site.name,
      url: homeUrl,
      logo: absoluteUrl("/assets/logo-main.jpg"),
      sameAs: [site.facebook],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: site.name,
      url: homeUrl,
    },
  ];

  return (
    <SiteShell>
      {jsonLd.map((block) => (
        <script
          key={block["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
      <main>
        <Hero />
        <Story />
        <Services />
        <Process />
        <Plans />
        <Stories />
        <FieldNotesTeaser />
        <Contact />
      </main>
    </SiteShell>
  );
}
