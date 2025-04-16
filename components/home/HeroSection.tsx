import Image from "next/image";
import { getCloudinaryImageData } from "@/lib/api/cloudinary";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";

export default async function HeroSection() {
  const heroImage = await getCloudinaryImageData(
    "Hero3_main",
    1920,
    1080,
    "hero-page"
  );
  return (
    <Section>
      {/* Relative container for the image */}
      <div className='relative w-full h-screen'>
        <Image
          src={heroImage}
          alt={heroImage.alt ?? "Hero"}
          className='object-cover'
          priority
          fill
        />

        {/* Overlay and content */}
        <div className='absolute inset-0 bg-black/70'>
          <div className='container mx-auto px-4 h-full flex flex-col justify-center items-center text-center'>
            <h1 className='text-accent mb-6'>Transform Your Outdoor Space</h1>
            <h5 className='text-xl text-accent'>
              We&apos;ve been creating beautiful outdoor spaces for over 20
              years with a focus on sustainability and quality.
            </h5>

            <Button
              label='Get a Free Estimate'
              primary
              href='/contact'
              customClass='my-10'
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
