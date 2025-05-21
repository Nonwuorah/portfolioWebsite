"use client";

import { useEffect } from "react";
import { Code, Lightbulb, Rocket, Workflow } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "MongoDB",
  "GraphQL",
  "Git",
];

const AboutSection = () => {
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
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold opacity-0 animate-on-scroll transition-all duration-700">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 opacity-0 animate-on-scroll transition-all duration-700 delay-100"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="opacity-0 animate-on-scroll transition-all duration-700 delay-200">
            <h3 className="text-2xl font-bold mb-4">
            I'm a full-stack engineer with a passion for building scalable and efficient web applications based in Lagos, Nigeria
            </h3>
            <p className="text-muted-foreground mb-4">
              I specialize in creating immersive web experiences with a focus on
              performance, accessibility, and beautiful design. With over 3 years
              of experience in web development, I've worked on projects ranging
              from small business websites to complex web applications.
            </p>
            <p className="text-muted-foreground mb-6">
              My approach combines technical expertise with creative
              problem-solving to deliver solutions that not only work flawlessly
              but also provide exceptional user experiences.
            </p>

            <div className="mt-8">
              <h4 className="font-semibold mb-3">My Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: <Code className="h-8 w-8 text-primary" />,
                title: "Web Development",
                description:
                  "Building responsive and performant websites using modern frameworks and tools",
                delay: "delay-300",
              },
              {
                icon: <Lightbulb className="h-8 w-8 text-primary" />,
                title: "UI/UX Design",
                description:
                  "Creating intuitive and engaging user interfaces with a focus on usability",
                delay: "delay-400",
              },
              {
                icon: <Workflow className="h-8 w-8 text-primary" />,
                title: "Technical Leadership",
                description:
                  "Leading development teams and establishing best practices for efficient workflows",
                delay: "delay-500",
              },
              {
                icon: <Rocket className="h-8 w-8 text-primary" />,
                title: "Performance Optimization",
                description:
                  "Enhancing web application speed and efficiency for better user experience",
                delay: "delay-600",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className={cn(
                  "opacity-0 animate-on-scroll transition-all duration-700",
                  item.delay
                )}
              >
                <CardContent className="p-6">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;