import { ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

export function CTASection() {
  return (
    <section className="py-24 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-6">
        <Card className="relative overflow-hidden border border-border/60 bg-foreground text-background rounded-2xl shadow-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle,#ffffff0a_1px,transparent_1px)] bg-[size:28px_28px]" />
          <CardContent className="relative px-10 py-16 sm:px-16 sm:py-20 flex flex-col items-center text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-background/50 mb-4">Get Started</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-background">
              Ready to start your internship journey?
            </h2>
            <p className="text-base text-background/70 max-w-xl mx-auto mb-10 leading-relaxed">
              Join thousands of students who have already found their perfect internships.
              Get started today and unlock your potential!
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-md mx-auto mb-8 w-full">
              <div className="relative flex-1 w-full">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-background/40" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="pl-9 bg-background/10 border-background/20 text-background placeholder:text-background/40 focus:border-background/60 h-10 rounded-lg"
                />
              </div>
              <Button size="default" variant="secondary" className="w-full sm:w-auto h-10 px-5 rounded-lg font-medium whitespace-nowrap bg-background text-foreground hover:bg-background/90 shadow-none">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <p className="text-xs text-background/50">
              Free to use · No credit card required · Join 50,000+ students
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}