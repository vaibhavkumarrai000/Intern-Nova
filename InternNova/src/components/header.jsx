'use client';

import { useState } from 'react';
import { Menu, X, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import Link from 'next/link';

const NAV_LINKS = [
  { href: '#features', label: 'Features' },
  { href: '#jobs',     label: 'Latest Jobs' },
  { href: '#about',    label: 'About' },
  { href: '#contact',  label: 'Contact' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl flex h-14 items-center justify-between px-6">

        {/* ── Logo ── */}
        <div className="flex items-center gap-2 select-none">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-foreground transition-transform duration-200 ease-out hover:scale-105">
            <Briefcase className="h-4 w-4 text-background" />
          </div>
          <span className="text-sm font-semibold tracking-tight">
            InternNova
          </span>
        </div>

        {/* ── Desktop nav ── */}
        <nav className="hidden md:flex items-center gap-0.5">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="relative text-sm text-muted-foreground hover:text-foreground transition-colors duration-150 px-3 py-1.5 rounded-md hover:bg-accent/60 group"
            >
              {label}
              {/* underline micro-interaction */}
              <span className="absolute inset-x-3 bottom-1 h-px bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out origin-left rounded-full" />
            </a>
          ))}
        </nav>

        {/* ── Right actions ── */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* Desktop CTA — solid fill with ring on focus */}
          <Button
            asChild
            size="sm"
            className="hidden sm:inline-flex h-8 rounded-md px-4 text-sm font-medium shadow-none transition-all duration-150 hover:opacity-90 active:scale-[0.97]"
          >
            <Link href="/dashboard">Get Started</Link>
          </Button>

          {/* Mobile hamburger */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden h-8 w-8 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent/60 transition-colors duration-150"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span
              className="transition-transform duration-200 ease-out"
              style={{ transform: isMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </span>
          </Button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <div
        className={`md:hidden border-t border-border/50 bg-background overflow-hidden transition-all duration-200 ease-out ${
          isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 pt-2 pb-4 flex flex-col gap-0.5">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150 px-3 py-2.5 rounded-md hover:bg-accent/60"
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <div className="pt-2 mt-1 border-t border-border/50">
            <Button className="w-full h-9 text-sm rounded-md shadow-none transition-all duration-150 hover:opacity-90 active:scale-[0.98]">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
