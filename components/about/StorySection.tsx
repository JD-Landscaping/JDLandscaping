import Container from "../layout/Container";
import Section from "../layout/Section";
import CustomImage from "../ui/CustomImage";

export default function StorySection() {
  return (
    <Section customClass='bg-primary-light'>
      <Container>
        <div className='grid grid-cols-1 xl:grid-cols-5'>
          <div className='col-span-3'>
            <h3>The J&D Landscaping & Construction Journey</h3>
            <p className='text-center lg:text-start paragraph-spaced pr-10'>
              J&D Landscaping & Construction began with a simple passion for
              transforming outdoor spaces. Founded in [Year] by [Founder Names],
              we started as a small, family-run team with a shared love for
              craftsmanship and the outdoors. What began with a single lawnmower
              and a pickup truck has grown into a trusted [Your Location]
              business, serving hundreds of homeowners with pride. Over the
              years, we’ve honed our skills in both landscaping and
              construction, combining creative design with durable, high-quality
              work. But no matter how much we’ve grown, we’ve never lost sight
              of what matters most—treating every client’s property like our
              own. When you work with us, you’re not just hiring landscapers;
              you’re partnering with a team that genuinely cares about bringing
              your vision to life.
            </p>
          </div>

          <div className='col-span-2 flex items-center justify-center pl-10'>
            <CustomImage
              src='about-hero'
              alt='family'
              width={900}
              height={300}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
