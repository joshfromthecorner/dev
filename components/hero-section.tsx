"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="min-h-dvh flex items-center justify-center px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-balance">
          Hi, I&apos;m Joshua
        </h1>
        <p className="text-xl sm:text-2xl text-muted-foreground text-pretty max-w-2xl mx-auto">
          Full Stack Developer & Creative Problem Solver
        </p>
        <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
          I build beautiful, functional web applications with modern technologies. 
          Passionate about creating exceptional user experiences.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Button size="lg" asChild>
            <a href="#projects">View My Work</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
        <div className="pt-8">
          <a
            href="#about"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span>Learn more</span>
            <ArrowDown className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
