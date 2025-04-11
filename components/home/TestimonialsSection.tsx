import Image from "next/image";
import logo from "@/public/logo.webp";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import ReviewEncouragementSection from "@/components/shared/ReviewEncouragementSection";
import Testimonials from "@/components/shared/Testimonials";

export default function TestimonialsSection() {
  return (
    <Section>
      <Container>
        <div className='flex flex-col md:flex-row justify-center lg:gap-x-96 items-center text-center md:text-left md:justify-between'>
          <h3>What Our Clients Say About J&D</h3>
          <Image
            src={logo}
            alt='J&D Logo'
          />
        </div>
        <Testimonials />
        <ReviewEncouragementSection />
      </Container>
    </Section>
  );
}
