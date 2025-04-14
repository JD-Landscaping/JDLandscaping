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
      <div className='md:mx-10  md:mb-14 rounded-2xl overflow-hidden'>
        <ContactSection />
      </div>

      {/* <Section customClass='mb-0 pb-0'>
        <div className='text-accent flex flex-col gap-2 justify-center px-16 pb-5'>
          <h4 className=' text-xl m-0'>Chat with us</h4>
          <p className=''>
            Prefer messaging? Reach out via email or social media—we respond
            fast!
          </p>
          {socials.map((social) => (
            <social.icon key={social.name} />
          ))}
        </div>
        <div className='text-accent flex flex-col gap-2 justify-center px-16 pb-5'>
          <h4 className=' text-xl m-0'>Call us</h4>
          <p className=''>Need immediate help? Call now for a free estimate!</p>

          {contactInfo.map((contact) => (
            <contact.icon key={contact.name} />
          ))}
        </div>
      </Section> */}
    </div>
  );
}
