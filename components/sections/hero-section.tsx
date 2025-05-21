"use client";

import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
      <div className="container px-4 py-32 md:py-40 max-w-5xl text-center md:text-left">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p
              className={cn(
                "text-md md:text-lg text-primary opacity-0 animate-on-scroll",
                "transition-all duration-700 delay-100 translate-y-8"
              )}
            >
              Hi there, I&apos;m
            </p>
            <h1
              ref={textRef}
              className={cn(
                "text-4xl md:text-5xl lg:text-6xl font-bold mt-2 opacity-0 animate-on-scroll",
                "transition-all duration-700 delay-200 translate-y-8"
              )}
            >
              <span className="block">Chinedu Onwuorah</span>
              <span className="block mt-1 text-primary">
                Frontend Developer
              </span>
            </h1>
            <p
              className={cn(
                "mt-6 text-foreground/80 max-w-md mx-auto md:mx-0 opacity-0 animate-on-scroll",
                "transition-all duration-700 delay-300 translate-y-8"
              )}
            >
              I build beautiful, interactive, and responsive web applications
              using modern technologies like React, Next.js, and Tailwind CSS.
            </p>
            <div
              className={cn(
                "mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start opacity-0 animate-on-scroll",
                "transition-all duration-700 delay-400 translate-y-8"
              )}
            >
              <Button size="lg" className="group">
                View My Work
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Download Resume
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 opacity-0 animate-on-scroll transition-all duration-700 delay-500">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-primary/20 blur-3xl opacity-30"></div>
              <div className="relative bg-muted rounded-full overflow-hidden border-4 border-border h-full w-full">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Profile"
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <Button variant="ghost" size="icon" className="rounded-full h-12 w-12">
          <ArrowDown />
          <span className="sr-only">Scroll down</span>
        </Button>
      </a>
    </section>
  );
};

export default HeroSection;