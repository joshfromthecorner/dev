import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CTAFooter } from "@/components/cta-footer";

export default function Home() {
  return (
    <main className="min-h-dvh">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <TestimonialsSection />
      <CTAFooter />
    </main>
  );
}
