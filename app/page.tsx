import { Hero } from '@/components/home/hero'
import { StatsBar } from '@/components/home/stats-bar'
import { CoursesPreview } from '@/components/home/courses-preview'
import { WhyUs } from '@/components/home/why-us'
import { ToppersStrip } from '@/components/home/toppers-strip'
import { Testimonials } from '@/components/home/testimonials'
import { CtaBanner } from '@/components/home/cta-banner'
import { HeroResonance } from "@/components/home/hero-resonance";
export default function HomePage() {
  return (
    <>
      {/* <Hero />
      <StatsBar />
      <CoursesPreview />
      <WhyUs />
      <ToppersStrip />
      <Testimonials />
      <CtaBanner /> */}

      <HeroResonance />


      <StatsBar />
      <CoursesPreview />
      <WhyUs />
      
      <Testimonials />
      <CtaBanner /> 
    </>
  )
}
