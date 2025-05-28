// src/components/sections/HomeHeroSection.tsx
import type { SanityImage } from '@/sanity/types';
import Divider from '../ui/Divider';
import SanityImageBlock from '../utility/SanityImageBlock';

interface HomeHeroSectionProps {
  _type: 'homeHeroSection';
  _key: string;
  backgroundImage: SanityImage;
}

export default function HomeHeroSection({ backgroundImage }: HomeHeroSectionProps) {
  console.log(backgroundImage);
  return (
    <section className='relative h-screen w-full overflow-hidden'>
      <SanityImageBlock fill priority image={backgroundImage} className='z-0 object-cover' />
      <div
        className='absolute inset-0 z-10'
        style={{ background: 'linear-gradient(to bottom, #161616, transparent 50%, #161616)' }}
      />
      <div className='absolute bottom-6 left-1/2 z-20 flex w-full -translate-x-1/2 transform flex-col items-center justify-center px-4'>
        <div className='flex w-[90%] items-center md:w-[80%] lg:w-[70%]'>
          <h2 className='font-serif text-[48px] tracking-wide text-white uppercase md:text-[140px]'>Modern</h2>
          <Divider
            width='flex-1'
            className="before:bg-rose-gold after:bg-rose-gold relative ml-2 before:absolute before:top-1/2 before:left-0 before:hidden before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full before:content-[''] after:absolute after:top-1/2 after:right-0 after:hidden after:h-2 after:w-2 after:-translate-y-1/2 after:rounded-full after:content-[''] md:before:block md:after:block"
          />
        </div>
        <div className='flex w-[90%] items-center justify-end md:w-[80%] lg:w-[70%]'>
          <Divider
            width='flex-1'
            className="before:bg-rose-gold after:bg-rose-gold relative mr-2 before:absolute before:top-1/2 before:left-0 before:hidden before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full before:content-[''] after:absolute after:top-1/2 after:right-0 after:hidden after:h-2 after:w-2 after:-translate-y-1/2 after:rounded-full after:content-[''] md:before:block md:after:block"
          />
          <h2 className='font-serif text-[48px] tracking-wide text-white uppercase md:text-[140px]'>MEXICAN</h2>
        </div>
      </div>
    </section>
  );
}
