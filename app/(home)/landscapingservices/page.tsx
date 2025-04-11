import HeroContainer from "@/components/layout/HeroContainer";
import Cta from "@/components/shared/Cta";
import ServicesSection from "@/components/shared/ServicesSection";

export default function ServicesPage() {
  return (
    <div className='page-layout bg-primary-light'>
      <HeroContainer
        imageUrl='about-hero'
        page='Services at'
        subheading=''
      />
      <ServicesSection />
      <Cta />
    </div>
  );
}
