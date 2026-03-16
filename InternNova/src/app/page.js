import { CTASection } from "@/components/ctasection";
import { FeaturesSection } from "@/components/features";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/herosection";
import { JobsSection } from "@/components/jobsection";
import { StatsSection } from "@/components/statssec";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <JobsSection />
        <StatsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
