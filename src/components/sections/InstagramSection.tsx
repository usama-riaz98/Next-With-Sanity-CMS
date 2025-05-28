// src/components/sections/InstagramSection.tsx
import type { SanityImage } from '@/sanity/types';
import Link from 'next/link';
import SanityImageBlock from '../utility/SanityImageBlock';

interface InstagramImageProps {
  image: SanityImage;
  link?: string;
}

interface InstagramSectionProps {
  _type: 'instagramSection';
  _key: string;
  title: string;
  description: string;
  instagramHandle: string;
  images: InstagramImageProps[];
}

function InstagramImage({ image, link }: InstagramImageProps) {
  const content = (
    <div className='relative h-full w-full overflow-hidden rounded-2xl shadow-[0px_20px_60px_0px_rgba(0,0,0,0.30)]'>
      {/* Background placeholder */}
      <div className='absolute h-full w-full bg-zinc-300'></div>

      {/* Use the image directly if available */}
      {image && (
        <div className='relative h-full w-full'>
          <SanityImageBlock fill priority image={image} className='object-cover' />
        </div>
      )}
    </div>
  );

  if (link) {
    return (
      <Link href={link} target='_blank' rel='noopener noreferrer'>
        {content}
      </Link>
    );
  }

  return content;
}

export default function InstagramSection({ title, description, instagramHandle, images }: InstagramSectionProps) {
  // Check if images is undefined or empty
  if (!images || images.length === 0) {
    console.warn('No images available for Instagram section');
    return (
      <div className='relative w-full bg-black py-20 text-center text-white'>
        <p>Instagram images are loading...</p>
      </div>
    );
  }
  // Different image sizes and positions based on the layout in the design
  const imageStyles = [
    'w-64 h-80', // 1st image
    'w-64 h-64', // 2nd image
    'w-64 h-96', // 3rd image
    'w-64 h-80', // 4th image
    'w-64 h-64', // 5th image
    'w-64 h-96', // 6th image
    'w-64 h-64', // 7th image
    'w-64 h-96', // 8th image
    'w-64 h-80', // 9th image
  ];

  // Different positioning classes
  const positionClasses = [
    'left-0 top-[75px]',
    'left-[271px] top-0',
    'left-[542px] top-[75px]',
    'left-[813px] top-[60px]',
    'left-[1084px] top-[15px]',
    'left-[1355px] top-[75px]',
    'left-[1626px] top-[75px]',
    'left-[1897px] top-0',
    'left-[2168px] top-[75px]',
  ];

  return (
    <div className='relative w-full py-20'>
      <div className='mb-8 text-center'>
        <div className="mb-4 justify-start text-center font-['Brandon_Grotesque'] text-base leading-none tracking-widest text-stone-400 uppercase">
          {title}
        </div>
        <div className="mx-auto mb-8 w-[497px] justify-start text-center font-['Cormorant_Garamond'] text-4xl leading-10 font-normal text-white">
          {description}
        </div>

        {/* Instagram handle button - moved before images */}
        <div className='mb-12 flex justify-center'>
          <div className='inline-flex h-10 items-center justify-center gap-2 rounded-[40px] bg-black/0 px-5 py-2 outline outline-[0.50px] outline-offset-[-0.50px] outline-white/50 backdrop-blur-[10px]'>
            <div className='relative h-4 w-4 overflow-hidden'>
              <div className='absolute top-[1.34px] left-[1.34px] h-3.5 w-3.5 outline outline-[1.33px] outline-offset-[-0.67px] outline-white'></div>
              <div className='absolute top-[5.30px] left-[5.36px] h-1.5 w-1.5 outline outline-[1.33px] outline-offset-[-0.67px] outline-white'></div>
              <div className='absolute top-[4.34px] left-[11.66px] h-0 w-[0.01px] outline outline-[1.33px] outline-offset-[-0.67px] outline-white'></div>
            </div>
            <div className="justify-start font-['Brandon_Grotesque'] text-xs leading-3 tracking-wider text-white uppercase">
              {instagramHandle}
            </div>
          </div>
        </div>
      </div>

      <div className='relative mx-auto h-96 w-[1440px] overflow-hidden'>
        {images.slice(0, 9).map((img, index) => (
          <div key={index} className={`absolute ${imageStyles[index]} ${positionClasses[index]}`}>
            <InstagramImage image={img.image} link={img.link} />
          </div>
        ))}
      </div>
    </div>
  );
}
