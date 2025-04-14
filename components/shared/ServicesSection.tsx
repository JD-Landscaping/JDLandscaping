import Image from "next/image";
import { services } from "@/lib/data";
import { processServiceData } from "@/lib/api/cloudinary";
import Container from "@/components/layout/Container";
import BasicGrid from "@/components/layout/BasicGrid";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

interface ServicesSectionProps {
  amount?: number;
}

async function getServicesData() {
  return services.map((service) => processServiceData(service));
}
export default async function ServicesSection({
  amount,
}: Readonly<ServicesSectionProps>) {
  let servicesWithImages = await getServicesData();

  if (amount) {
    servicesWithImages = servicesWithImages.slice(0, amount);
  }

  return (
    <Section customClass='bg-primary-light'>
      <Container>
        <h3 className='text-center'>Our Services</h3>
        <BasicGrid>
          {servicesWithImages.map((service) => (
            <Card
              key={service.id}
              url={`/landscapingservices/${service.id}`}
            >
              <div className='overflow-hidden rounded-md transition-shadow'>
                <div className='relative h-80 md:h-60 lg:h-72 2xl:h-92'>
                  <Image
                    src={service.src}
                    alt={service.name}
                    fill
                    className='object-cover group-hover:scale-105 transition-transform duration-300'
                  />
                </div>
              </div>
              <div className='my-4'>
                <h4>{service.name}</h4>
                <p>{service.description}</p>
              </div>
            </Card>
          ))}
        </BasicGrid>
        <Section>
          <div className='flex flex-col text-nowrap lg:flex-row justify-center items-center gap-3 lg:gap-4 px-2'>
            <Button
              label='See All Services'
              href='/landscapingservices'
              customClass='px-30'
            />
            <Button
              label='Get Free Estimate'
              primary={false}
              href='/contact'
              customClass='px-28'
            />
          </div>
        </Section>
      </Container>
    </Section>
  );
}
