import { values } from "@/lib/data";
import Container from "../layout/Container";
import Section from "../layout/Section";

export default function ValuesSection() {
  return (
    <Section>
      <Container>
        <h3 className='text-center mb-16'>
          Rooted in Values, Growing Through Trust
        </h3>
        <div className='flex flex-col md:flex-row justify-evenly text-center w-full'>
          {values.map((value) => (
            <div
              key={value.label}
              className=' flex flex-col items-center px-4 mx-auto mb-8 md:mb-0 '
            >
              <value.icon className='text-center text-7xl md:text-8xl mb-5 text-primary' />
              <h5 className='text-xl font-semibold mb-2'>{value.label}</h5>
              <p className='text-center paragraph-centered'>
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
