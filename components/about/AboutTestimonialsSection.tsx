import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Testimonials from "@/components/shared/Testimonials";
import ReviewEncouragementSection from "@/components/shared/ReviewEncouragementSection";

export default function AboutTestimonialsSection() {
  return (
    <Section>
      <Container>
        <div className='flex flex-col'>
          <div className='flex flex-col md:flex-row justify-center items-center text-center'>
            <h3>What Our Clients Say About J&D</h3>
          </div>
          <Testimonials />
          <ReviewEncouragementSection />
        </div>
      </Container>
    </Section>
  );
}
