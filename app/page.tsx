import { Suspense } from "react";
import HomeHero from "@/components/home/hero";
import FeaturedSection from "@/components/home/featured-section";
import FeaturesGrid from "@/components/home/features-grid";
import NewsletterSection from "@/components/home/newsletter-section";
import AllTools from "@/components/home/all-tools";

export default function Home() {
  return (
    <>
      <HomeHero />
      <Suspense fallback={<div className="container py-8">Loading featured tools...</div>}>
        <FeaturedSection />
      </Suspense>
      <FeaturesGrid />
      <Suspense fallback={<div className="container py-8">Loading all tools...</div>}>
        <AllTools />
      </Suspense>
      <Suspense fallback={<div className="container py-8">Loading newsletter...</div>}>
        <NewsletterSection />
      </Suspense>
    </>
  );
}