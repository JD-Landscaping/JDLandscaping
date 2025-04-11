import Image from "next/image";
import Section from "@/components/layout/Section";
import { getCloudinaryImageData } from "@/lib/api/cloudinary";

interface HeroContainerProps {
  imageUrl: string;
  page: string;
  subheading: string;
}

export default async function HeroContainer({
  imageUrl,
  page,
  subheading,
}: Readonly<HeroContainerProps>) {
  const HeroImage = await getCloudinaryImageData(imageUrl);

  return (
    <Section>
      <div className='relative w-full h-[900px]'>
        <Image
          src={HeroImage.src}
          alt={page}
          priority
          fill
          className='object-cover'
        />
        {/* Overlay & Content */}
        <div className='absolute inset-0 bg-overlay'>
          <div className='container mx-auto px-4 h-full flex flex-col justify-center items-start text-start'>
            <h3 className='text-accent font-inter'>{page}</h3>
            <h2 className='text-accent'>J&D Landscaping</h2>
            <h2 className='text-accent mb-5'>& Construction</h2>
            <p className='text-lg text-accent'>{subheading}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
