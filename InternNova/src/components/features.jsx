import { Search, Filter, Bell, BarChart3, Globe, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function FeaturesSection() {
  const features = [
    {
      icon: Search,
      title: 'Smart Search',
      description: 'Find internships with advanced filters including location, duration, stipend, and more.',
      gradient: 'from-purple-500 to-blue-500',
    },
    {
      icon: Bell,
      title: 'Real-time Alerts',
      description: 'Get instant notifications for new internships matching your preferences.',
      gradient: 'from-blue-500 to-green-500',
    },
    {
      icon: Globe,
      title: 'Multi-platform Aggregation',
      description: 'Access opportunities from Internshala, Unstop, LinkedIn, and 20+ other platforms.',
      gradient: 'from-green-500 to-yellow-500',
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Track your applications, success rate, and get insights to improve your profile.',
      gradient: 'from-yellow-500 to-red-500',
    },
    {
      icon: Filter,
      title: 'Smart Filtering',
      description: 'AI-powered recommendations based on your skills, interests, and career goals.',
      gradient: 'from-red-500 to-purple-500',
    },
    {
      icon: Shield,
      title: 'Verified Opportunities',
      description: 'All internships are verified and screened to ensure legitimacy and quality.',
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="features" className="py-24 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Features</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Everything you need to{' '}
            <span className="text-muted-foreground font-normal">
              land your dream internship
            </span>
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Our comprehensive platform provides all the tools and resources you need to find, apply, and secure the perfect internship opportunity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:border-foreground/25 transition-all duration-200 bg-background rounded-xl border border-border/60 shadow-none">
              <CardHeader className="pb-2 pt-6 px-6">
                <div className={`inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br ${feature.gradient} text-white mb-4`}>
                  <feature.icon className="h-4 w-4" />
                </div>
                <CardTitle className="text-base font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}