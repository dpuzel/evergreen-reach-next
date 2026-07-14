import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Plans } from "@/components/Plans";
import { Stories } from "@/components/Stories";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Services />
        <Process />
        <Plans />
        <Stories />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
