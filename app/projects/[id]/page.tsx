"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { ArrowLeft, Github, ExternalLink, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getProjectById } from "@/lib/project-data";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";

export default function ProjectDetail() {
  const router = useRouter();
  const params = useParams();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (params.id) {
      const projectId = Number(params.id);
      const projectData = getProjectById(projectId);
      
      if (projectData) {
        setProject(projectData);
      }
      setLoading(false);
    }
  }, [params]);

  if (loading) {
    return (
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </ThemeProvider>
    );
  }

  if (!project) {
    return (
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div className="min-h-screen bg-background">
          <Navbar />
          <div className="container py-32 text-center">
            <h1 className="text-3xl font-bold mb-6">Project Not Found</h1>
            <p className="mb-8 text-muted-foreground">
              The project you are looking for does not exist.
            </p>
            <Button onClick={() => router.push("/#projects")}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Button>
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-20 pb-16">
          <div className="container max-w-5xl px-4">
            <Button
              variant="ghost"
              className="mb-8"
              onClick={() => router.push("/#projects")}
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Button>

            <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-8">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-8">
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {project.title}
                  </h1>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag: string) => (
                      <Badge key={tag} variant="secondary" className="bg-white/20 backdrop-blur-sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
                <p className="text-muted-foreground mb-6">
                  {project.description}
                </p>
                <p className="text-muted-foreground mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel
                  ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl.
                  Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl
                  nisl sit amet nisl.
                </p>
                <p className="text-muted-foreground mb-8">
                  Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl
                  nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl,
                  nec aliquam nisl nisl sit amet nisl.
                </p>

                <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
                  <li>Responsive design for all device sizes</li>
                  <li>Interactive user interface with smooth animations</li>
                  <li>Secure authentication and data handling</li>
                  <li>Performance optimized for fast loading times</li>
                  <li>Comprehensive documentation and testing</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4">Technical Details</h2>
                <p className="text-muted-foreground mb-6">
                  This project was built using {project.tags.join(", ")}, with a focus on code quality,
                  performance, and user experience. The development process included wireframing,
                  prototyping, development, testing, and deployment.
                </p>
              </div>

              <div className="md:col-span-1">
                <div className="bg-muted rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-4">Project Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium">Date</h4>
                        <p className="text-muted-foreground text-sm">January 2023</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Tag className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium">Category</h4>
                        <p className="text-muted-foreground text-sm capitalize">
                          {project.category}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    <Button asChild className="w-full" size="lg">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Preview
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="w-full" size="lg">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" /> View Source
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}