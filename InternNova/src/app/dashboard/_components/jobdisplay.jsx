"use client";
import { useEffect, useState } from "react";

export default function MainDisplay() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;

  useEffect(() => {
    if (!backendURL) {
      setError("Backend URL is not configured.");
      setLoading(false);
      return;
    }
    async function fetchJobs() {
      try {
        const res = await fetch(`${backendURL}/api/jobs/`);
        if (!res.ok) throw new Error(`Server responded with ${res.status}`);
        const data = await res.json();
        setJobs(data);
      } catch (err) {
        console.error("Error fetching jobs:", err);
        setError("Failed to load internships. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
    fetchJobs();
  }, [backendURL]);

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center h-full gap-3 text-muted-foreground pt-20">
        <div className="h-7 w-7 animate-spin rounded-full border-2 border-border border-t-foreground"></div>
        <p className="text-sm">Fetching latest internships…</p>
      </div>
    );

  if (error)
    return (
      <div className="flex flex-col items-center justify-center h-full gap-3 text-muted-foreground pt-20">
        <p className="text-sm text-destructive">{error}</p>
      </div>
    );

  const cardVariants = [
    "from-blue-500 to-blue-600",
    "from-purple-500 to-purple-600",
    "from-emerald-500 to-emerald-600",
    "from-amber-500 to-amber-600",
    "from-rose-500 to-rose-600",
    "from-indigo-500 to-indigo-600",
  ];

  return (
    <div className="h-[calc(100vh-3.5rem)] overflow-y-auto p-6 bg-muted/30">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
        {jobs.map((job, index) => {
          const colorVariant = cardVariants[index % cardVariants.length];
          const fullLink = job.link.startsWith("http")
            ? job.link
            : `https://internshala.com${job.link}`;

          return (
            <div
              key={job._id}
              className={`group relative bg-gradient-to-br ${colorVariant} rounded-xl p-5 shadow-none hover:shadow-lg transition-all duration-200 flex flex-col justify-between overflow-hidden text-white`}
            >
              {/* Shine hover effect */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>

              {/* Job Details */}
              <div className="relative z-10">
                <h2 className="text-base font-semibold mb-0.5 leading-snug">{job.title}</h2>
                <p className="text-sm mb-0.5 font-medium opacity-90">{job.company}</p>
                <p className="text-xs mb-4 opacity-70">{job.location}</p>

                <div className="text-xs space-y-1.5 bg-black/15 backdrop-blur-sm rounded-lg p-3">
                  <p>
                    <span className="font-semibold">Stipend:</span> {job.stipend}
                  </p>
                  <p>
                    <span className="font-semibold">Duration:</span> {job.duration}
                  </p>
                  <p>
                    <span className="font-semibold">Platform:</span> {job.platform}
                  </p>
                  <p className="opacity-60 mt-1">
                    Posted on {new Date(job.postedAt).toLocaleDateString()}
                  </p>
                </div>
              </div>

              {/* Apply Button */}
              <a
                href={fullLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 relative z-10 inline-block text-center bg-white/95 text-gray-900 text-sm font-medium py-2 px-4 rounded-lg hover:bg-white transition-colors shadow-sm"
              >
                Apply Now
              </a>

              {/* Decorative Shapes */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-white/10 group-hover:bg-white/20 transition-all duration-500"></div>
              <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-white/10 group-hover:bg-white/20 transition-all duration-700"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
