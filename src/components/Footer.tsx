import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/30 bg-[#fff9e8]">
      <div className="absolute inset-0 -z-10 opacity-40 bg-[radial-gradient(circle_at_top_left,_rgba(0,0,0,0.05),transparent_70%)]" />
      <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(circle_at_bottom_right,_rgba(0,0,0,0.05),transparent_70%)]" />

      <div className="container mx-auto px-6 py-12 space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left max-w-md">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
              SenpaiScholars
            </h3>
            <p className="text-sm text-neutral-600">
              Empowering learners worldwide with cutting-edge education
              technology. Unlock your potential and grow with us.
            </p>
          </div>

          <div className="flex space-x-4">
            {[
              {
                href: 'https://github.com/',
                icon: <Github className="w-5 h-5" />,
                label: 'GitHub',
              },
              {
                href: 'https://twitter.com/',
                icon: <Twitter className="w-5 h-5" />,
                label: 'Twitter',
              },
              {
                href: 'https://linkedin.com/',
                icon: <Linkedin className="w-5 h-5" />,
                label: 'LinkedIn',
              },
              {
                href: 'mailto:contact@senpaischolars.com',
                icon: <Mail className="w-5 h-5" />,
                label: 'Email',
              },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-lg bg-white/70 hover:bg-primary hover:text-primary-foreground shadow-sm transition-all duration-300"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-border/30 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <ul className="flex flex-wrap justify-center md:justify-start gap-6 text-sm">
            <li>
              <Link
                href="/about"
                className="text-neutral-600 hover:text-primary transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/courses"
                className="text-neutral-600 hover:text-primary transition-colors"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                href="/support"
                className="text-neutral-600 hover:text-primary transition-colors"
              >
                Support
              </Link>
            </li>
          </ul>

          <div className="flex items-center text-sm text-neutral-600">
            <span>© {new Date().getFullYear()} SenpaiScholars</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
