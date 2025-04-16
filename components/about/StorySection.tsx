import Container from "../layout/Container";
import Section from "../layout/Section";
import CustomImage from "../ui/CustomImage";

export default function StorySection() {
  return (
    <Section customClass='bg-primary-light'>
      <Container>
        <div className='grid grid-cols-1 xl:grid-cols-5'>
          <div className='col-span-3'>
            <h3 className='text-center xl:text-start'>
              The J&D Landscaping & Construction Journey
            </h3>
            <p className='text-center xl:text-start paragraph-spaced pb-10 xl:pb-0 xl:pr-10'>
              J&D Landscaping & Construction was founded by Jorge over eight
              years ago, building on his extensive 18-year career in the
              landscaping industry. With roots deeply planted in hands-on
              experience and technical knowledge, Jorge established the company
              to deliver exceptional outdoor transformations and construction
              services to the community. His commitment to quality craftsmanship
              and attention to detail are reflected in every project, from
              complete landscape redesigns to custom construction work. Today,
              J&D continues to grow while maintaining the same dedication to
              excellence that has been our foundation since the beginning.
            </p>
          </div>

          <div className='col-span-2 flex items-center justify-center xl:pl-10'>
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
