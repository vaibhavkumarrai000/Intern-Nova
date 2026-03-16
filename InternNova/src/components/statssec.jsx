import { TrendingUp, Users, Building, Award } from 'lucide-react';

export function StatsSection() {
  const stats = [
    {
      icon: TrendingUp,
      value: '98%',
      label: 'Success Rate',
      description: 'Of our users land internships',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Users,
      value: '50K+',
      label: 'Active Students',
      description: 'Trust our platform',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Building,
      value: '2,500+',
      label: 'Partner Companies',
      description: 'Post opportunities daily',
      gradient: 'from-purple-500 to-violet-500',
    },
    {
      icon: Award,
      value: '25+',
      label: 'Platforms Integrated',
      description: 'For maximum coverage',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section className="py-24 border-t border-border/60 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">By the Numbers</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Trusted by{' '}
            <span className="text-muted-foreground font-normal">thousands of students</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-xl leading-relaxed">
            Join the community of successful interns who found their dream opportunities through InternNova.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border/60 rounded-2xl overflow-hidden border border-border/60">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center py-10 px-6 bg-background hover:bg-muted/40 transition-colors duration-200">
              <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${stat.gradient} text-white mb-5`}>
                <stat.icon className="h-5 w-5" />
              </div>
              <div className="text-4xl font-bold tracking-tight mb-1">{stat.value}</div>
              <div className="text-sm font-medium mb-1">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}