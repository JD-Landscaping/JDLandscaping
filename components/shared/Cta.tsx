import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import Container from "../layout/Container";

export default function Cta() {
  return (
    <Section customClass='bg-primary'>
      <Container>
        <h3 className='text-accent text-center'>
          Let’s Build Your Dream Landscape Together!
        </h3>
        <h4 className='text-accent text-center mb-10'>
          Free, no-obligation estimates—book yours today before our spring
          schedule fills up!
        </h4>
        <div>
          <Button
            label='Get Free Quote'
            href='/contact'
            primary={false}
            customClass='px-20'
          />
        </div>
      </Container>
    </Section>
  );
}
