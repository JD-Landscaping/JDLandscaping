import HeroContainer from "@/components/layout/HeroContainer";
import Cta from "@/components/shared/Cta";
import Gallery from "@/components/shared/gallery/Gallery";
import {
  getImagesByTag,
  getServiceByID,
  processServiceData,
} from "@/lib/api/cloudinary";
import Link from "next/link";
import React from "react";

interface ServicePageProps {
  params: Promise<{
    serviceId: string;
  }>;
}

async function getServiceData(id: string) {
  const service = getServiceByID(id);
  if (!service) return null;

  const galleryImages = await getImagesByTag(service.galleryTag);

  return processServiceData(service, galleryImages);
}

export default async function ServicePage({
  params,
}: Readonly<ServicePageProps>) {
  const { serviceId } = await params;
  const service = await getServiceData(serviceId);

  if (!service) {
    return (
      <div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 px-4'>
        <div className='w-full max-w-4xl text-center bg-white rounded-xl shadow-lg p-8'>
          <div className='mb-6 text-gray-500'>
            <Link
              href='/services'
              className='inline-flex items-center text-[#FF8106] hover:text-[#FF8106]transition-colors font-medium'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 mr-2'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z'
                  clipRule='evenodd'
                />
              </svg>
              Return to Services
            </Link>
          </div>
          <h2 className='text-gray-800 mb-4'>Service Not Found</h2>
          <p className='text-gray-600 mb-6'>
            We couldn&apos;t find the service you&apos;re looking for.
          </p>
          <Link
            href='/services'
            className='inline-block px-6 py-3 bg-[#FF8106] text-white font-medium rounded-lg hover:bg-[#FF8106] transition-colors'
          >
            Browse Available Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className='bg-white'>
      {/* Hero Section */}
      <HeroContainer
        imageUrl={service.mainImageId}
        page={service.name}
        subheading={service.description}
      />

      {/* Main Content */}
      <div className='container mx-auto px-4 py-16'>
        <Link
          href='/landscapingservices'
          className='inline-flex items-center text-primary hover:text-gray-200 transition-colors mb-4'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5 mr-2'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z'
              clipRule='evenodd'
            />
          </svg>
          All Services
        </Link>

        <div className='lg:col-span-9'>
          <div className='bg-white rounded-xl text-center'>
            <h3 className=' mb-6'>About This Service</h3>
            <div className=' prose prose-lg max-w-none text-gray-600'>
              <p className='text-center'>{service.fullDescription}</p>
            </div>

            <div className='mt-16'>
              <h3 className='mb-8 flex items-center'>
                <span className='mr-3'>Service Gallery</span>
                <div className='h-px bg-gray-300 flex-grow mt-1'></div>
              </h3>
              <Gallery gallery={service.gallery} />
            </div>
          </div>
        </div>
      </div>

      {/* Related Services */}

      {/* Call to Action */}
      <Cta />
    </div>
  );
}

// Add metadata generation for SEO
export async function generateMetadata({ params }: ServicePageProps) {
  const { serviceId } = await params;
  const service = await getServiceData(serviceId);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.name} | Our Services`,
    description: service.description,
    openGraph: {
      images: [{ url: service.src }],
    },
  };
}
