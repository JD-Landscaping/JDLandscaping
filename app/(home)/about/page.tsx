import StorySection from "@/components/about/StorySection";
import ValuesSection from "@/components/about/ValuesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import HeroContainer from "@/components/layout/HeroContainer";
import Cta from "@/components/shared/Cta";

export default function AboutPage() {
  return (
    <div className='page-layout'>
      <HeroContainer
        imageUrl='about-hero'
        page='About'
        subheading='Family-Owned, Quality-Driven – Serving Minnesota with Pride Since 2015.'
      />
      <ValuesSection />
      <StorySection />
      <TestimonialsSection showLogo={false} />
      <Cta />
    </div>
  );
}
