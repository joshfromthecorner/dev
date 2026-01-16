"use client";

import { Separator } from "@/components/ui/separator";

export function AboutSection() {
  return (
    <section id="about" className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <div className="space-y-16">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-balance mb-4">
              About
            </h2>
            <Separator className="mb-8" />
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-balance">Who I Am</h3>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                I&apos;m a developer who believes software should feel right. 
                Like it was made by someone who took the time to apply an almost 
                unreasonable level of consideration. With experience spanning 
                frontend and backend development, I bring a holistic approach to 
                building applications that are both beautiful and functional.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-balance">What I Do</h3>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                I specialize in building modern web applications using React, 
                Next.js, and TypeScript. I&apos;m also experienced in backend 
                development, API design, and cloud infrastructure. I enjoy working 
                on projects that challenge me and help me grow, always with a 
                focus on craft and attention to detail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
