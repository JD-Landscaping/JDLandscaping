import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";

interface NavbarProps {
  customClass?: string;
}

export default function Navbar({ customClass }: NavbarProps) {
  return (
    <div className={`${customClass} flex-col bg-white text-[#333333]`}>
      {/* Navbar */}
      <nav className='fixed top-0 left-0 right-0 z-50 bg-white shadow-md'>
        <div className='container mx-auto px-4'>
          <div className='container text-sm mx-auto flex justify-center items-center'>
            {/* First Links */}
            <div className='flex flex-col gap-5 container'>
              <div className='flex justify-evenly items-center'>
                <Link
                  href='/'
                  className='hover:text-[#7E8D70] transition text-[#333333]'
                >
                  Home
                </Link>
                <Link
                  href='/about'
                  className='hover:text-[#7E8D70] transition text-[#333333]'
                >
                  About
                </Link>
              </div>
              {/* Dark Line */}
              <div className='h-[1px] bg-gray-border w-full'></div>
            </div>

            {/* Logo and Company Name */}
            <div className='flex justify-center pt-2 px-10'>
              <Link
                href='/'
                className='inline-flex flex-col items-center'
              >
                <Image
                  src='/logo.webp'
                  alt='J&D Landscaping & Construction Logo'
                  width={60}
                  height={60}
                  className='mb-3'
                />
                <div className='flex flex-col justify-center items-center text-center'>
                  <h4 className='text-nowrap text-xs font-normal text-gray-700 font-sourceSerif4 leading-[0.05rem] tracking-wider'>
                    Landscaping
                  </h4>
                  <h4 className='text-nowrap text-xs font-normal text-gray-700 font-sourceSerif4 leading-[0.05rem] tracking-wider'>
                    & Construction
                  </h4>
                </div>
              </Link>
            </div>

            {/* Second Links */}
            <div className='flex flex-col gap-5  container'>
              <div className='flex justify-evenly items-center'>
                <Link
                  href='/landscapingservices'
                  className='hover:text-[#7E8D70] transition text-[#333333]'
                >
                  Services
                </Link>
                <div>
                  <Button
                    label='Contact'
                    href='/contact'
                  />
                </div>
              </div>
              {/* Dark Line */}
              <div className='h-[1px] bg-gray-border w-full'></div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
