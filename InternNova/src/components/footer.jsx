import { Briefcase, Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-foreground">
                <Briefcase className="h-4 w-4 text-background" />
              </div>
              <span className="text-base font-semibold tracking-tight">InternNova</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your one-stop platform for finding the latest internship opportunities from top companies and platforms.
            </p>
            <div className="flex gap-1.5">
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-md border border-border/60 hover:border-foreground/20 hover:bg-accent">
                <Link href='https://github.com/amitgupta7061'><Github className="h-3.5 w-3.5" /></Link>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-md border border-border/60 hover:border-foreground/20 hover:bg-accent">
                <Link href="https://x.com/home?lang=en"><Twitter className="h-3.5 w-3.5" /></Link>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-md border border-border/60 hover:border-foreground/20 hover:bg-accent">
                <Link href="https://www.linkedin.com/feed/"><Linkedin className="h-3.5 w-3.5" /></Link>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-md border border-border/60 hover:border-foreground/20 hover:bg-accent">
                <Link href="mailto:amittgupta.dev@gmail.com"><Mail className="h-3.5 w-3.5" /></Link>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Platform</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Browse Internships</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Company Profiles</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Career Resources</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Support</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Community</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/60 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-muted-foreground">
            © 2025 InternNova. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with ❤️ for students
          </p>
        </div>
      </div>
    </footer>
  );
}