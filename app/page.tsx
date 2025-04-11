import AboutSection from "@/components/home/AboutSection";
import ContactSection from "@/components/home/ContactSection";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/shared/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export default function Home() {
  return (
    <div className='flex flex-col'>
      <HeroSection />
      <AboutSection />
      <ServicesSection amount={6} />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
