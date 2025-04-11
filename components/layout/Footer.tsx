import Link from "next/link";
import React from "react";
import { contactInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className='bg-secondary text-accent py-12'>
      <div className='basic-grid w-full mx-auto px-4 text-center'>
        <div className='flex justify-center items-center space-x-6 mb-6'>
          <Link
            href='/'
            className='hover:text-[#7E8D70] transition'
          >
            Home
          </Link>
          <Link
            href='/about'
            className='hover:text-[#7E8D70] transition'
          >
            About
          </Link>
          <Link
            href='/landscapingservices'
            className='hover:text-[#7E8D70] transition'
          >
            Services
          </Link>
          <Link
            href='/contact'
            className='hover:text-[#7E8D70] transition'
          >
            Contact
          </Link>
        </div>

        <Link
          href={"/"}
          className='flex flex-col justify-center items-center gap-4 mb-6'
        >
          <h4 className='font-medium text-accent font-sourceSerif4 leading-0 tracking-normal text-center'>
            J&D Landscaping & Construction
          </h4>
          <p className='text-center'>
            Transforming Spaces, Creating Experiences
          </p>
          {/* <Image
            src='/logo.webp'
            alt='J&D Landscaping & Construction Logo'
            width={120}
            height={120}
            className='mb-2'
          /> */}
        </Link>
        <div className='flex flex-col justify-center items-center'>
          <h5 className='text-lg'>Get in touch</h5>
          <div className='flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-2'>
            {contactInfo.map((contact) => (
              <Link
                key={contact.name}
                href={contact.url}
                className='flex items-center gap-4'
              >
                <contact.icon />
                {contact.content}
              </Link>
            ))}
            <p>
              &copy; 2024 J&D Landscaping & Construction. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
