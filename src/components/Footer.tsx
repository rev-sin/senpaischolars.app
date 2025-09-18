import { Github, Heart, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/50 backdrop-blur-sm">
      {/* Background design */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/5 via-background to-secondary/5" />
      <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="absolute inset-0 -z-10 opacity-20 bg-[radial-gradient(circle_at_bottom_right,_rgba(139,92,246,0.15),transparent_60%)]" />

      {/* Content */}
      <div className="container mx-auto px-6 py-12 space-y-8">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="text-center md:text-left max-w-md">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
              SenpaiScholars
            </h3>
            <p className="text-sm text-muted-foreground">
              Empowering learners worldwide with cutting-edge education
              technology. Unlock your potential and grow with us.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="p-2 rounded-lg bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:contact@senpaischolars.com"
              aria-label="Email"
              className="p-2 rounded-lg bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-border/50 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Links */}
          <ul className="flex flex-wrap justify-center md:justify-start gap-6 text-sm">
            <li>
              <Link
                href="/about"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/courses"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                href="/support"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Support
              </Link>
            </li>
          </ul>

          {/* Copyright */}
          <div className="flex items-center text-sm text-muted-foreground">
            <span>© {new Date().getFullYear()} SenpaiScholars</span>
            <Heart className="w-4 h-4 mx-1 text-secondary fill-current" />
            <span>for learners worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
