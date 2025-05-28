// src/components/sections/DualContentSection.tsx
import type { SanityImage } from '@/sanity/types';
import Link from 'next/link';
import SanityImageBlock from '../utility/SanityImageBlock';

interface PanelProps {
  backgroundImage: SanityImage;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: { slug: { current: string } };
}

interface DualContentSectionProps {
  _type: 'dualContentSection';
  _key: string;
  leftPanel: PanelProps;
  rightPanel: PanelProps;
}

function ContentPanel({ 
  backgroundImage, 
  title, 
  description, 
  buttonText, 
  buttonLink 
}: PanelProps) {
  return (
    <div className="w-[672px] h-[672px] bg-black rounded-2xl overflow-hidden relative">
      <SanityImageBlock
        fill
        image={backgroundImage}
        className="z-0 object-cover opacity-80"
      />
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-between py-20">
        <div className="text-center">
          <div className="text-center justify-start text-stone-400 text-base font-['Brandon_Grotesque'] uppercase leading-none tracking-widest mb-4">
            {title}
          </div>
          <div className="w-[440px] mx-auto text-center justify-start text-white text-4xl font-normal font-['Cormorant_Garamond'] leading-10">
            {description}
          </div>
        </div>
        {buttonLink?.slug?.current ? (
          <Link href={buttonLink.slug.current}>
            <div className="h-10 px-5 py-2 bg-black/0 rounded-[40px] outline outline-[0.50px] outline-offset-[-0.50px] outline-white/50 backdrop-blur-[10px] inline-flex justify-center items-center gap-2.5">
              <div className="justify-start text-white text-sm font-['Brandon_Grotesque'] uppercase leading-none tracking-wider">
                {buttonText}
              </div>
            </div>
          </Link>
        ) : (
          <div className="h-10 px-5 py-2 bg-black/0 rounded-[40px] outline outline-[0.50px] outline-offset-[-0.50px] outline-white/50 backdrop-blur-[10px] inline-flex justify-center items-center gap-2.5">
            <div className="justify-start text-white text-sm font-['Brandon_Grotesque'] uppercase leading-none tracking-wider">
              {buttonText}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function DualContentSection({ leftPanel, rightPanel }: DualContentSectionProps) {
  return (
    <div className="flex justify-between w-[1360px] mx-auto my-10 gap-4">
      <ContentPanel {...leftPanel} />
      <ContentPanel {...rightPanel} />
    </div>
  );
}
