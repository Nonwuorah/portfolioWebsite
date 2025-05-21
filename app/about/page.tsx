import { ChevronsRight } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { ThemeProvider } from "@/components/theme-provider";
import { skillsData } from "@/lib/skills-data";

export default function About() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-20">
          {/* Hero Section */}
          <section className="bg-muted/30 py-16 md:py-24">
            <div className="container px-4 max-w-5xl">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    About Me
                  </h1>
                  <div className="w-20 h-1 bg-primary mb-6"></div>
                  <p className="text-muted-foreground mb-4">
                    I'm a passionate full-stack engineer with expertise in 
                    building responsive, accessible, and performant web applications.
                    My journey in web development started 3 years ago, and I've been
                    continuously learning and growing ever since.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    I specialize in modern JavaScript frameworks like React and Next.js,
                    with a strong focus on creating beautiful user interfaces that provide
                    exceptional user experiences.
                  </p>
                  <div className="flex gap-4">
                    <Button asChild>
                      <Link href="#skills">
                        View My Skills <ChevronsRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/contact">Contact Me</Link>
                    </Button>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="About Me"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section className="py-16 md:py-24">
            <div className="container px-4 max-w-5xl">
              <h2 className="text-3xl font-bold mb-4 text-center">
                Work Experience
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

              <div className="space-y-8">
                {[
                  {
                    role: "Full-stack Engineer",
                    company: "F.5 Labs",
                    period: "2024 - Present",
                    description:
                      "Led end-to-end development of scalable web applications while managing project workflows and team coordination. Combined technical expertise in modern full-stack development with effective project management methodologies to deliver high-quality solutions. ",
                  },
                  {
                    role: "Software Engineer",
                    company: "GOMYCODE",
                    period: "2023 - 2024",
                    description:
                      "Contributed to full-stack web application development using the MERN (MongoDB, Express.js, React.js, Node.js) technology stack. Collaborated with senior developers to build responsive and scalable web solutions while gaining hands-on experience in modern web development practices.",
                  },
                  {
                    role: "Frontend Web Developer",
                    company: "eFTD",
                    period: "2016 - 2018",
                    description:
                      "Assisted in building responsive websites and implementing UI designs. Gained experience with HTML, CSS, JavaScript, and various frontend frameworks.",
                  },
                ].map((experience, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold">
                            {experience.role}
                          </h3>
                          <p className="text-primary">{experience.company}</p>
                        </div>
                        <div className="mt-2 md:mt-0">
                          <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">
                            {experience.period}
                          </span>
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        {experience.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-16 md:py-24 bg-muted/30">
            <div className="container px-4 max-w-5xl">
              <h2 className="text-3xl font-bold mb-4 text-center">
                Skills & Expertise
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

              <div className="space-y-12">
                {skillsData.map((category) => (
                  <div key={category.id}>
                    <h3 className="text-xl font-semibold mb-6">
                      {category.name}
                    </h3>
                    <div className="space-y-6">
                      {category.skills.map((skill) => (
                        <div key={skill.name}>
                          <div className="flex justify-between mb-2">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-muted-foreground">
                              {skill.level}%
                            </span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className="py-16 md:py-24">
            <div className="container px-4 max-w-5xl">
              <h2 className="text-3xl font-bold mb-4 text-center">
                Education & Certifications
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    degree: "Bachelor of Education in History & International Studies",
                    institution: "University of Nigeria, Nsukka",
                    year: "2015 - 2019",
                    description:
                      "Focused on history of man and his evolution, history of science and technology, and globalism and modern day tchnology.",
                  },
                  {
                    degree: "Software Engineering (Frontend Web Development)",
                    institution: "ALT__School Africa",
                    year: "2022",
                    description:
                      "Intensive bootcamp focused on modern JavaScript frameworks and responsive design.",
                  },
                  {
                    degree: "AWS Certified Developer",
                    institution: "Amazon Web Services",
                    year: "2019",
                    description:
                      "Professional certification for developing and maintaining applications on the AWS platform.",
                  },
                  {
                    degree: "React Advanced Patterns",
                    institution: "Frontend Masters",
                    year: "2020",
                    description:
                      "Advanced course on React design patterns, performance optimization, and state management.",
                  },
                ].map((education, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <h3 className="text-xl font-semibold">
                          {education.degree}
                        </h3>
                        <p className="text-primary">{education.institution}</p>
                        <p className="text-sm text-muted-foreground">
                          {education.year}
                        </p>
                      </div>
                      <p className="text-muted-foreground">
                        {education.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}