import Link from "next/link";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 py-12">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-lg font-semibold mb-4">Chinedu Onwuorah</h3>
              <p className="text-muted-foreground mb-6 max-w-xs">
                A passionate Full-stack Engineer focused on creating beautiful and
                functional web experiences.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-foreground/80 hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/Nonwuorah"
                  className="text-foreground/80 hover:text-primary transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/onwuorah-chinedu"
                  className="text-foreground/80 hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/mzilikazi_n/?__pwa=1#"
                  className="text-foreground/80 hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#home"
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    About Me
                  </Link>
                </li>
                <li>
                  <Link
                    href="#projects"
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <address className="not-italic">
                <p className="mb-2 text-foreground/80">Lagos, Nig</p>
                <p className="mb-2 text-foreground/80">
                  Email: allaboutnedu@gmail.com
                </p>
                <p className="text-foreground/80">Phone: (+234) 803-911-7755</p>
              </address>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border/50 text-center text-foreground/60">
            <p>
              &copy; {currentYear} Chinedu Onwuorah. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;