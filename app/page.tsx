import { RetroGrid } from "@/components/atoms/RetroGrid";
import { NavBar } from "@/components/organisms/NavBar";
import { Hero } from "@/components/organisms/Hero";
import { ServicesSection } from "@/components/organisms/ServicesSection";
import { MenuGrid } from "@/components/organisms/MenuGrid";
import { Footer } from "@/components/organisms/Footer";
import { SectionHeading } from "@/components/atoms/SectionHeading";

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col">
      <RetroGrid />
      <NavBar />

      <Hero />

      <div className="space-y-32 pb-32">
        <ServicesSection />

        <section id="menu" className="container mx-auto px-4 scroll-mt-24">
          <SectionHeading
            title="Fuel Station"
            subtitle="Legendary eats and neon treats."
          />
          <MenuGrid />
        </section>

        <section id="location" className="container mx-auto px-4 scroll-mt-24">
          {/* Location is handled in Footer, but we might want a specific section or just jump to footer */}
          <SectionHeading title="Find Us" />
          <div className="p-8 border border-white/10 rounded-2xl bg-black/40 backdrop-blur text-center space-y-4">
            <p className="text-xl md:text-2xl text-white">
              We are where the neon lights shine brightest.
            </p>
            <p className="text-muted-foreground">
              See footer for map and details.
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
