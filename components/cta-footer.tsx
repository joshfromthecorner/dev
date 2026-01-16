"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";

export function CTAFooter() {
  return (
    <footer id="contact" className="py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-[800px] mx-auto w-full">
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-balance">
              Let&apos;s Work Together
            </h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
              Have a project in mind? I&apos;d love to hear from you. 
              Send me a message and let&apos;s create something amazing together.
            </p>
            <div className="pt-4">
              <Button size="lg" asChild>
                <a href="mailto:joshua@example.com">Get In Touch</a>
              </Button>
            </div>
          </div>

          <Separator />

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <a
                    href="mailto:joshua@example.com"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    joshua@example.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <span className="text-muted-foreground">
                    Your City, Country
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Connect</h3>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          <Separator />

          <div className="text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Joshua. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
