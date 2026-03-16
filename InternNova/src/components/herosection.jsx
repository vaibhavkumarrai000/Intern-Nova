import { ArrowRight, Play, Star, Users, Briefcase, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-20 overflow-hidden">
      {/* Subtle dot-grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,#88888818_1px,transparent_1px)] bg-[size:28px_28px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/60 px-3 py-1 text-xs font-medium text-muted-foreground mb-7">
          <Star className="h-3 w-3 text-amber-500 fill-amber-500" />
          #1 Internship Aggregator
        </div>

        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6 leading-[1.08]">
          Find Your Perfect{' '}
          <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
            Internship
          </span>
        </h1>

        <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
          Discover the latest internships from top platforms like Internshala, Unstop, and more.{' '}
          All opportunities posted in the last 24 hours, aggregated in one place.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-16">
          <Button size="lg" className="h-11 px-7 rounded-lg font-medium shadow-none">
            Start Your Search
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="h-11 px-7 rounded-lg font-medium border-border/60 group">
            <Play className="mr-2 h-4 w-4 group-hover:text-primary transition-colors" />
            Watch Demo
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border border border-border/60 rounded-xl overflow-hidden bg-muted/30 max-w-md mx-auto">
          <div className="text-center py-5 px-6">
            <div className="flex items-center justify-center gap-1.5 mb-1">
              <Briefcase className="h-3.5 w-3.5 text-muted-foreground" />
              <div className="text-xl font-bold tracking-tight">10K+</div>
            </div>
            <div className="text-xs text-muted-foreground">Active Internships</div>
          </div>
          <div className="text-center py-5 px-6">
            <div className="flex items-center justify-center gap-1.5 mb-1">
              <Users className="h-3.5 w-3.5 text-muted-foreground" />
              <div className="text-xl font-bold tracking-tight">50K+</div>
            </div>
            <div className="text-xs text-muted-foreground">Students Placed</div>
          </div>
          <div className="text-center py-5 px-6">
            <div className="flex items-center justify-center gap-1.5 mb-1">
              <Clock className="h-3.5 w-3.5 text-muted-foreground" />
              <div className="text-xl font-bold tracking-tight">24hrs</div>
            </div>
            <div className="text-xs text-muted-foreground">Fresh Updates</div>
          </div>
        </div>
      </div>
    </section>
  );
}
