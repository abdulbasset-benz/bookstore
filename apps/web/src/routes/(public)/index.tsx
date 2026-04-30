import { createFileRoute } from "@tanstack/react-router"

import { HeroSection } from "@/components/home/HeroSection"
import { OfferSection } from "@/components/home/OfferSection"
import { QuoteSection } from "@/components/home/QuoteSection"
import { PopularBooks } from "@/components/home/PopularBooks"
import { BestSeller } from "@/components/home/BestSeller"
import { FeaturedBooks } from "@/components/home/FeaturedBooks"

export const Route = createFileRoute("/(public)/")({
  component: HomePage,
})

function HomePage() {
  return (
    <div className="space-y-24">
      <HeroSection />
      <OfferSection />
      <QuoteSection />
      <PopularBooks />
      <BestSeller />
      <FeaturedBooks />
    </div>
  )
}