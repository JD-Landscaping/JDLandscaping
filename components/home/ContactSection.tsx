import Section from "@/components/layout/Section";

import ContactForm from "@/components/shared/ContactForm";

export default function ContactSection() {
  return (
    <Section customClass='bg-primary'>
      <div className='m-5'>
        <h3 className='text-accent text-center'>Contact Our Team</h3>
        <div className='max-w-[35rem] mx-auto w-full'>
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
