"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with product listings, cart, and secure checkout.",
    image:
      "https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "Next.js", "Stripe", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    category: "web",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team features.",
    image:
      "https://images.pexels.com/photos/6804604/pexels-photo-6804604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "Firebase", "Tailwind CSS", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#",
    category: "web",
  },
  {
    id: 3,
    title: "Finance Dashboard",
    description:
      "An analytics dashboard for tracking financial data and visualizing trends.",
    image:
      "https://images.pexels.com/photos/7821485/pexels-photo-7821485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "Chart.js", "Node.js", "Express"],
    liveUrl: "#",
    githubUrl: "#",
    category: "mobile",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A personal portfolio showcasing projects and skills with a modern design.",
    image:
      "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
    category: "design",
  },
];

const categories = [
  { id: "all", name: "All Projects" },
  { id: "web", name: "Web Applications" },
  { id: "mobile", name: "Mobile Apps" },
  { id: "design", name: "Design" },
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === activeCategory)
      );
    }
  }, [activeCategory]);

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
    <section id="projects" className="py-20 md:py-32">
      <div className="container px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold opacity-0 animate-on-scroll transition-all duration-700">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 opacity-0 animate-on-scroll transition-all duration-700 delay-100"></div>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto opacity-0 animate-on-scroll transition-all duration-700 delay-200">
            Explore my latest work. Each project represents my passion for
            creating beautiful and functional web experiences.
          </p>
        </div>

        <div className="flex justify-center mb-12 opacity-0 animate-on-scroll transition-all duration-700 delay-300">
          <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className="min-w-[120px]"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className={cn(
                "group overflow-hidden opacity-0 animate-on-scroll transition-all duration-700",
                `delay-${(index + 4) * 100}`
              )}
            >
              <div className="relative h-60 overflow-hidden">
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                  <div className="flex gap-4">
                    <Button
                      size="sm"
                      className="rounded-full"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ArrowUpRight className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="rounded-full bg-background/80 backdrop-blur-sm"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;