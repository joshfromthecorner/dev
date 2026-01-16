"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "Tech Corp",
    content: "Joshua is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are outstanding.",
  },
  {
    name: "Michael Chen",
    role: "Lead Developer",
    company: "StartupXYZ",
    content: "Working with Joshua was a pleasure. He brings creativity and technical expertise to every project, and his code is always clean and maintainable.",
  },
  {
    name: "Emily Rodriguez",
    role: "Design Director",
    company: "Creative Agency",
    content: "Joshua understands the balance between beautiful design and functional code. He&apos;s a true collaborator who makes the entire team better.",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-32 px-4 sm:px-6 lg:px-8 bg-muted/30 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-16">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-balance mb-4">
              Testimonials
            </h2>
            <Separator className="mb-8" />
          </div>

          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <p className="text-lg text-pretty mb-4">
                    &quot;{testimonial.content}&quot;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t">
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
