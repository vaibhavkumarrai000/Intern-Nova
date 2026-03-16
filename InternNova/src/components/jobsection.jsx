'use client';

import { useState } from 'react';
import { MapPin, Clock, DollarSign, Building, ExternalLink, Filter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export function JobsSection() {
  const [filter, setFilter] = useState('all');

  const jobs = [
    {
      id: 1,
      title: 'Frontend Developer Intern',
      company: 'TechCorp',
      location: 'Mumbai, India',
      type: 'Remote',
      duration: '6 months',
      stipend: '₹25,000/month',
      platform: 'Internshala',
      postedTime: '2 hours ago',
      tags: ['React', 'JavaScript', 'CSS'],
      gradient: 'from-blue-500 to-purple-500',
    },
    {
      id: 2,
      title: 'Data Science Intern',
      company: 'DataMinds',
      location: 'Bangalore, India',
      type: 'Hybrid',
      duration: '4 months',
      stipend: '₹30,000/month',
      platform: 'Unstop',
      postedTime: '5 hours ago',
      tags: ['Python', 'Machine Learning', 'SQL'],
      gradient: 'from-green-500 to-blue-500',
    },
    {
      id: 3,
      title: 'Digital Marketing Intern',
      company: 'GrowthLab',
      location: 'Delhi, India',
      type: 'Office',
      duration: '3 months',
      stipend: '₹20,000/month',
      platform: 'LinkedIn',
      postedTime: '8 hours ago',
      tags: ['SEO', 'Social Media', 'Analytics'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: 4,
      title: 'Mobile App Developer',
      company: 'AppVenture',
      location: 'Pune, India',
      type: 'Remote',
      duration: '6 months',
      stipend: '₹28,000/month',
      platform: 'Internshala',
      postedTime: '12 hours ago',
      tags: ['Flutter', 'Dart', 'Firebase'],
      gradient: 'from-yellow-500 to-red-500',
    },
    {
      id: 5,
      title: 'UI/UX Design Intern',
      company: 'DesignStudio',
      location: 'Chennai, India',
      type: 'Hybrid',
      duration: '5 months',
      stipend: '₹22,000/month',
      platform: 'Behance',
      postedTime: '18 hours ago',
      tags: ['Figma', 'Prototyping', 'User Research'],
      gradient: 'from-pink-500 to-purple-500',
    },
    {
      id: 6,
      title: 'Content Writing Intern',
      company: 'ContentCraft',
      location: 'Kolkata, India',
      type: 'Remote',
      duration: '4 months',
      stipend: '₹15,000/month',
      platform: 'Unstop',
      postedTime: '20 hours ago',
      tags: ['Writing', 'SEO', 'Research'],
      gradient: 'from-green-500 to-teal-500',
    },
  ];

  const filteredJobs = filter === 'all' ? jobs : jobs.filter(job => job.platform.toLowerCase() === filter);

  return (
    <section id="jobs" className="py-24 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="max-w-lg">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Live Feed</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Latest Internships{' '}
              <span className="text-muted-foreground font-normal">posted in 24h</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-[160px] h-9 text-sm border-border/60">
                <Filter className="mr-2 h-3.5 w-3.5 shrink-0" />
                <SelectValue placeholder="Filter by platform" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Platforms</SelectItem>
                <SelectItem value="internshala">Internshala</SelectItem>
                <SelectItem value="unstop">Unstop</SelectItem>
                <SelectItem value="linkedin">LinkedIn</SelectItem>
                <SelectItem value="behance">Behance</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Updated 5 minutes ago
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredJobs.map((job) => (
            <Card key={job.id} className="group flex flex-col hover:border-foreground/25 transition-all duration-200 bg-background rounded-xl border border-border/60 shadow-none overflow-hidden">
              <CardHeader className="pb-3 pt-5 px-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <Badge variant="secondary" className="text-xs font-medium rounded-md px-2 py-0.5 h-auto">
                    {job.platform}
                  </Badge>
                  <span className="text-xs text-muted-foreground whitespace-nowrap shrink-0">
                    <Clock className="inline mr-1 h-3 w-3" />
                    {job.postedTime}
                  </span>
                </div>
                <CardTitle className="text-base font-semibold leading-snug group-hover:text-primary transition-colors">
                  {job.title}
                </CardTitle>
                <div className="flex items-center gap-1.5 mt-1">
                  <Building className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                  <span className="text-sm text-muted-foreground">{job.company}</span>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-1 px-5 pb-5 space-y-4">
                <div className="space-y-1.5 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 shrink-0" />
                    <span>{job.location} · {job.type}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-3.5 w-3.5 shrink-0" />
                    <span>{job.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                    <span className="font-medium text-emerald-700 dark:text-emerald-400">{job.stipend}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {job.tags.map((tag, index) => (
                    <span key={index} className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-muted text-muted-foreground border border-border/60">
                      {tag}
                    </span>
                  ))}
                </div>

                <Button size="sm" className="w-full mt-auto h-8 text-sm font-medium rounded-lg shadow-none">
                  Apply Now
                  <ExternalLink className="ml-2 h-3.5 w-3.5" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" className="h-9 px-6 text-sm rounded-lg border-border/60 hover:border-foreground/25 shadow-none">
            View All {jobs.length > 6 ? `${jobs.length - 6}+ More` : ''} Internships
          </Button>
        </div>
      </div>
    </section>
  );
}