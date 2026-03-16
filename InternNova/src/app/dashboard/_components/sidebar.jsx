"use client";

import { Button } from "@/components/ui/button";
import {
  Home,
  Briefcase,
  Settings,
  Github,
  Twitter,
  Linkedin,
  Mail,
  Building,
  Search,
  UserCheck,
  Network,
  FolderSearch,
  Globe,
} from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

export default function Sidebar() {

    const Handlemsg = () => {
        toast.message('Working on it');
    }

  return (
    <aside className="bg-background border-r border-border/60 h-screen flex flex-col items-center lg:items-stretch w-16 lg:w-60 transition-all justify-between py-5 px-2 lg:px-3 shrink-0">
      {/* Logo */}
      <div className="flex items-center justify-center lg:justify-start gap-2 px-2 mb-6">
        <div className="flex h-7 w-7 items-center justify-center rounded-md bg-foreground shrink-0">
          <Briefcase className="w-4 h-4 text-background" />
        </div>
        <span className="hidden lg:block text-base font-semibold tracking-tight">
          InternNova
        </span>
      </div>

      {/* Menu items */}
      <nav className="flex-1 flex flex-col gap-0.5">
        <a
          href="/"
          className="flex flex-col lg:flex-row items-center lg:gap-2.5 text-muted-foreground hover:text-foreground hover:bg-accent w-full px-2 py-2 rounded-md transition-colors duration-150 text-sm"
        >
          <Home size={16} className="shrink-0" />
          <span className="hidden lg:inline">Home</span>
        </a>
        <a
          href="#"
          onClick={Handlemsg}
          className="flex flex-col lg:flex-row items-center lg:gap-2.5 text-muted-foreground hover:text-foreground hover:bg-accent w-full px-2 py-2 rounded-md transition-colors duration-150 text-sm"
        >
          <Briefcase size={16} className="shrink-0" />
          <span className="hidden lg:inline">Internshala</span>
        </a>
        <a
          href="#"
          onClick={Handlemsg}
          className="flex flex-col lg:flex-row items-center lg:gap-2.5 text-muted-foreground hover:text-foreground hover:bg-accent w-full px-2 py-2 rounded-md transition-colors duration-150 text-sm"
        >
          <Building size={16} className="shrink-0" />
          <span className="hidden lg:inline">Naukri.com</span>
        </a>
        <a
          href="#"
          onClick={Handlemsg}
          className="flex flex-col lg:flex-row items-center lg:gap-2.5 text-muted-foreground hover:text-foreground hover:bg-accent w-full px-2 py-2 rounded-md transition-colors duration-150 text-sm"
        >
          <Search size={16} className="shrink-0" />
          <span className="hidden lg:inline">Indeed</span>
        </a>
        <a
          href="#"
          onClick={Handlemsg}
          className="flex flex-col lg:flex-row items-center lg:gap-2.5 text-muted-foreground hover:text-foreground hover:bg-accent w-full px-2 py-2 rounded-md transition-colors duration-150 text-sm"
        >
          <UserCheck size={16} className="shrink-0" />
          <span className="hidden lg:inline">Unstop</span>
        </a>
        <a
          href="#"
          onClick={Handlemsg}
          className="flex flex-col lg:flex-row items-center lg:gap-2.5 text-muted-foreground hover:text-foreground hover:bg-accent w-full px-2 py-2 rounded-md transition-colors duration-150 text-sm"
        >
          <Network size={16} className="shrink-0" />
          <span className="hidden lg:inline">Hirect</span>
        </a>
        <a
          href="#"
          onClick={Handlemsg}
          className="flex flex-col lg:flex-row items-center lg:gap-2.5 text-muted-foreground hover:text-foreground hover:bg-accent w-full px-2 py-2 rounded-md transition-colors duration-150 text-sm"
        >
          <FolderSearch size={16} className="shrink-0" />
          <span className="hidden lg:inline">Monster</span>
        </a>
        <a
          href="#"
          onClick={Handlemsg}
          className="flex flex-col lg:flex-row items-center lg:gap-2.5 text-muted-foreground hover:text-foreground hover:bg-accent w-full px-2 py-2 rounded-md transition-colors duration-150 text-sm"
        >
          <Globe size={16} className="shrink-0" />
          <span className="hidden lg:inline">LinkedIn Jobs</span>
        </a>
      </nav>

      <div className="flex gap-1 justify-center items-center pt-4 border-t border-border/60">
        <Button variant="ghost" size="icon" className="h-7 w-7 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent">
          <Link href="https://github.com/amitgupta7061">
            <Github className="h-3.5 w-3.5" />
          </Link>
        </Button>
        <Button variant="ghost" size="icon" className="h-7 w-7 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent">
          <Link href="https://x.com/home?lang=en">
            <Twitter className="h-3.5 w-3.5" />
          </Link>
        </Button>
        <Button variant="ghost" size="icon" className="h-7 w-7 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent">
          <Link href="https://www.linkedin.com/feed/">
            <Linkedin className="h-3.5 w-3.5" />
          </Link>
        </Button>
        <Button variant="ghost" size="icon" className="h-7 w-7 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent">
          <Link href="mailto:amittgupta.dev@gmail.com">
            <Mail className="h-3.5 w-3.5" />
          </Link>
        </Button>
      </div>
    </aside>
  );
}
