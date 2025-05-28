import type { SanityImage } from '@/sanity/types';
import Link from 'next/link';
import SanityImageBlock from '../utility/SanityImageBlock';

interface TocaTuesdaySectionProps {
  _type: 'tocaTuesdaySection';
  _key: string;
  backgroundImage: SanityImage;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: { slug: { current: string } };
}

export default function TocaTuesdaySection({
  backgroundImage,
  title,
  description,
  buttonText,
  buttonLink,
}: TocaTuesdaySectionProps) {
  return (
    <div className='relative mx-auto my-10 h-[672px] w-[1360px] overflow-hidden rounded-2xl bg-black'>
      <SanityImageBlock fill image={backgroundImage} className='z-0 object-cover' />
      <div className='absolute inset-0 z-10 flex flex-col items-center justify-between py-20'>
        <div className='text-center'>
          <div className="mb-4 justify-start text-center font-['Brandon_Grotesque'] text-base leading-none tracking-widest text-stone-400 uppercase">
            {title}
          </div>
          <div className="mx-auto w-[680px] justify-start text-center font-['Cormorant_Garamond'] text-4xl leading-10 font-normal text-white">
            {description}
          </div>
        </div>
        {buttonLink?.slug?.current ? (
          <Link href={buttonLink.slug.current}>
            <div className='inline-flex h-10 items-center justify-center gap-2.5 rounded-[40px] bg-black/0 px-5 py-2 outline outline-[0.50px] outline-offset-[-0.50px] outline-white/50 backdrop-blur-[10px]'>
              <div className="justify-start font-['Brandon_Grotesque'] text-sm leading-none tracking-wider text-white uppercase">
                {buttonText}
              </div>
            </div>
          </Link>
        ) : (
          <div className='inline-flex h-10 items-center justify-center gap-2.5 rounded-[40px] bg-black/0 px-5 py-2 outline outline-[0.50px] outline-offset-[-0.50px] outline-white/50 backdrop-blur-[10px]'>
            <div className="justify-start font-['Brandon_Grotesque'] text-sm leading-none tracking-wider text-white uppercase">
              {buttonText}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
