"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
      alert("Message sent successfully!");
    }, 1500);
  };

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
          <section className="py-16 md:py-24">
            <div className="container px-4 max-w-5xl">
              <div className="text-center mb-16">
                <h1 className="text-3xl md:text-4xl font-bold">
                  Get In Touch
                </h1>
                <div className="w-20 h-1 bg-primary mx-auto mt-4 mb-6"></div>
                <p className="text-muted-foreground max-w-lg mx-auto">
                  Feel free to reach out for collaborations, opportunities, or
                  just to say hello. I'll get back to you as soon as possible.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <div className="space-y-6">
                    {[
                      {
                        icon: <Mail className="h-6 w-6 text-primary" />,
                        title: "Email",
                        content: "allaboutnedu@gmail.com",
                      },
                      {
                        icon: <Phone className="h-6 w-6 text-primary" />,
                        title: "Phone",
                        content: "(+234) 803-911-7755",
                      },
                      {
                        icon: <MapPin className="h-6 w-6 text-primary" />,
                        title: "Location",
                        content: "Lagos, Nigeria",
                      },
                    ].map((item, index) => (
                      <Card key={index}>
                        <CardContent className="p-6 flex items-start gap-4">
                          <div className="mt-1">{item.icon}</div>
                          <div>
                            <h3 className="font-semibold mb-1">{item.title}</h3>
                            <p className="text-muted-foreground">
                              {item.content}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="mt-8">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-4">Connect With Me</h3>
                        <div className="flex gap-4">
                          {["github", "twitter", "linkedin", "instagram"].map(
                            (platform) => (
                              <Button
                                key={platform}
                                variant="outline"
                                size="icon"
                                className="h-10 w-10 rounded-full"
                                asChild
                              >
                                <a
                                  href={`https://${platform}.com`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <span className="sr-only">{platform}</span>
                                  <i
                                    className={`fab fa-${platform}`}
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </Button>
                            )
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-2xl font-semibold mb-6">
                        Send Me a Message
                      </h2>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label
                              htmlFor="name"
                              className="text-sm font-medium text-foreground"
                            >
                              Your Name
                            </label>
                            <Input
                              id="name"
                              name="name"
                              placeholder="Nedu Onwuorah"
                              value={formData.name}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <label
                              htmlFor="email"
                              className="text-sm font-medium text-foreground"
                            >
                              Your Email
                            </label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="allaboutnedu@gmail.com"
                              value={formData.email}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="subject"
                            className="text-sm font-medium text-foreground"
                          >
                            Subject
                          </label>
                          <Input
                            id="subject"
                            name="subject"
                            placeholder="How can I help you?"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="message"
                            className="text-sm font-medium text-foreground"
                          >
                            Message
                          </label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="Your message..."
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <Button
                          type="submit"
                          size="lg"
                          className="w-full"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            "Sending..."
                          ) : (
                            <>
                              Send Message <Send className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-muted/30">
            <div className="container px-4 max-w-5xl">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-muted-foreground max-w-lg mx-auto">
                  Find answers to common questions about my services and work process.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    question: "What services do you offer?",
                    answer:
                      "I specialize in frontend development including responsive websites, web applications, UI/UX implementation, and performance optimization.",
                  },
                  {
                    question: "What is your typical project timeline?",
                    answer:
                      "Project timelines vary based on complexity, but I typically deliver small projects within 2-4 weeks and larger projects within 1-3 months.",
                  },
                  {
                    question: "Do you provide ongoing support?",
                    answer:
                      "Yes, I offer maintenance and support services to ensure your website or application continues to function optimally after launch.",
                  },
                  {
                    question: "How do you handle project communication?",
                    answer:
                      "I maintain regular communication through your preferred channels (email, Slack, etc.) with weekly progress updates and milestone reviews.",
                  },
                  {
                    question: "What is your rate?",
                    answer:
                      "My rates depend on project scope and requirements. I offer hourly, fixed-price, and retainer options to suit your needs.",
                  },
                  {
                    question: "Can you work with existing designs?",
                    answer:
                      "Absolutely! I can implement designs from Figma, Adobe XD, or any other design tool with pixel-perfect accuracy.",
                  },
                ].map((faq, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
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