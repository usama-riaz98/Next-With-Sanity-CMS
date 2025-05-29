import type { SanityImage } from '@/sanity/types';
import SanityImageBlock from '../utility/SanityImageBlock';

interface HeroSectionProps {
  _type: 'heroSection';
  _key: string;
  backgroundImage: SanityImage;
  headingTop: string;
  headingMiddle: string;
  headingBottom: string;
}

export default function HeroSection({ backgroundImage, headingTop, headingMiddle, headingBottom }: HeroSectionProps) {
  return (
    <main className='flex justify-center overflow-x-hidden'>
      <div className='relative h-[1200px] w-[1440px] overflow-hidden bg-neutral-900'>
        <div className='absolute top-0 left-0 h-[900px] w-[1440px] overflow-hidden'>
          <SanityImageBlock fill priority image={backgroundImage} className='z-0 object-cover opacity-80' />
        </div>
        <div className='absolute top-[675px] left-[219px] h-96 w-[1003px]'>
          <div className="absolute top-[270px] left-0 justify-start font-['Cormorant_Garamond'] text-9xl leading-[140px] font-normal tracking-[14px] text-white uppercase">
            {headingBottom}
          </div>
          <div className="absolute top-0 left-0 justify-start font-['Cormorant_Garamond'] text-9xl leading-[140px] font-normal tracking-[14px] text-white uppercase">
            {headingTop}
          </div>

          <div className="absolute top-[135px] left-[293px] justify-start font-['Cormorant_Garamond'] text-9xl leading-[140px] font-normal tracking-[14px] text-white uppercase">
            {headingMiddle}
          </div>
        </div>
      </div>
    </main>
  );
}
