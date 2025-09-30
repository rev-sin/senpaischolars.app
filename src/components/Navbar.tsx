'use client';

import {
  BellIcon,
  BookOpenIcon,
  GlobeIcon,
  HouseIcon,
  LayoutIcon,
  ListIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  SignInIcon,
  UsersIcon,
  XIcon,
} from '@phosphor-icons/react';
import Link from 'next/link';
import { useId, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

function LogoMark() {
  // Replace with logo image later if logo is made
  return (
    <span
      aria-hidden="true"
      className="inline-block h-7 w-7 rounded-md bg-[#050C9C]"
    />
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const searchId = useId();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background backdrop-blur">
      <div className="h-20 px-6 lg:px-14 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link
            href="/"
            className="flex items-center gap-2"
          >
            <LogoMark />
            <span className="font-sans text-xl font-bold tracking-tight text-primary">
              Senpai Scholars
            </span>
          </Link>
          <div className="hidden lg:block relative w-[360px]">
            <MagnifyingGlassIcon
              weight="regular"
              className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <label
              htmlFor="site-search"
              className="sr-only"
            >
              Search Courses
            </label>
            <Input
              id={searchId}
              placeholder="Search for courses, topics..."
              className="pl-10 text-base"
            />
          </div>
          <nav className="hidden lg:flex items-center gap-8 text-base font-medium text-foreground">
            <Link
              href="/"
              className="flex items-center gap-1 hover:text-primary transition-colors"
            >
              <HouseIcon
                className="h-5 w-5"
                weight="duotone"
              />{' '}
              Home
            </Link>
            <Link
              href="/courses"
              className="flex items-center gap-1 hover:text-primary transition-colors"
            >
              <BookOpenIcon
                className="h-5 w-5"
                weight="duotone"
              />{' '}
              Courses
            </Link>

            <Link
              href="/dashboard"
              className="flex items-center gap-1 hover:text-primary transition-colors"
            >
              <LayoutIcon
                className="h-5 w-5"
                weight="duotone"
              />{' '}
              Dashboard
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="hidden items-center gap-1 text-base font-medium text-foreground hover:text-primary md:flex transition-colors"
            aria-label="Language"
          >
            <GlobeIcon
              className="h-5 w-5"
              weight="regular"
            />{' '}
            EN
          </button>

          <button
            type="button"
            className="hidden rounded-full p-2 hover:bg-secondary md:inline-flex"
            aria-label="Notifications"
          >
            <BellIcon
              className="h-5 w-5 text-foreground"
              weight="regular"
            />
          </button>

          <button
            type="button"
            className="hidden rounded-full p-2 hover:bg-secondary md:inline-flex"
            aria-label="Cart"
          >
            <ShoppingCartIcon
              className="h-5 w-5 text-foreground"
              weight="regular"
            />
          </button>

          <Link
            href="/login"
            className="hidden md:inline text-base font-medium text-primary hover:underline transition-colors"
          >
            <span className="inline-flex items-center">
              <SignInIcon
                className="h-5 w-5 mr-1"
                weight="regular"
              />
              Sign In
            </span>
          </Link>

          <Button className="hidden md:inline bg-primary text-background text-base font-semibold px-6 py-2 hover:opacity-90">
            Get Started
          </Button>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-secondary"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <XIcon
                className="h-6 w-6 text-foreground"
                weight="bold"
              />
            ) : (
              <ListIcon
                className="h-6 w-6 text-foreground"
                weight="bold"
              />
            )}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="lg:hidden border-t bg-background px-6 py-4 flex flex-col gap-4">
          <nav className="flex flex-col gap-3 text-base font-medium text-foreground">
            <Link
              href="/courses"
              onClick={() => setMobileOpen(false)}
            >
              <BookOpenIcon
                className="inline h-5 w-5 mr-2"
                weight="duotone"
              />
              Courses
            </Link>
            <Link
              href="/dashboard"
              onClick={() => setMobileOpen(false)}
            >
              <LayoutIcon
                className="inline h-5 w-5 mr-2"
                weight="duotone"
              />
              Dashboard
            </Link>
            <Link
              href="/community"
              onClick={() => setMobileOpen(false)}
            >
              <UsersIcon
                className="inline h-5 w-5 mr-2"
                weight="duotone"
              />
              Home
            </Link>
          </nav>

          <div className="flex flex-col gap-3 mt-4">
            <Link
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="flex items-center text-primary font-medium"
            >
              <SignInIcon
                className="h-5 w-5 mr-2"
                weight="regular"
              />
              Sign In
            </Link>
            <Button className="w-full bg-primary text-background font-semibold">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
