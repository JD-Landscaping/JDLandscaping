import ContactSection from "@/components/home/ContactSection";
import HeroContainer from "@/components/layout/HeroContainer";

export default function ContactPage() {
  return (
    <div className='page-layout bg-primary md:bg-accent'>
      <HeroContainer
        imageUrl='contact-hero'
        page='Contact'
        subheading='Family-Owned, Quality-Driven – Excited for the opportunity to work with you.'
      />

      {/* Main Content */}
      <div className='md:mx-10  md:mb-14 rounded-2xl overflow-hidden'>
        <ContactSection />
      </div>
    </div>
  );
}
