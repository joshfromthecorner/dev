import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CTAFooter } from "@/components/cta-footer";
import { GridBackground } from "@/components/grid-background";

export default function Home() {
  return (
    <main className="min-h-dvh relative">
      <GridBackground />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <TestimonialsSection />
      <CTAFooter />
    </main>
  );
}
