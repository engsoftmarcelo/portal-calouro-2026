import { AcademicPreview } from "@/components/academic/AcademicPreview";
import { CommandPalette } from "@/components/home/CommandPalette";
import { HeroSection } from "@/components/home/HeroSection";
import { UsefulLinks } from "@/components/home/UsefulLinks";
import { WelcomeCard } from "@/components/home/WelcomeCard";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <div className="page-shell space-y-12 pb-20">
        <CommandPalette />
        <section id="setup" className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <WelcomeCard />
          <UsefulLinks />
        </section>
        <AcademicPreview />
      </div>
    </main>
  );
}
