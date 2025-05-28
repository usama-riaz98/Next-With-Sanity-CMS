// src/components/sections/CocktailsSection.tsx
import type { SanityImage } from '@/sanity/types';
import Link from 'next/link';
import SanityImageBlock from '../utility/SanityImageBlock';

interface CocktailProps {
  name: string;
  image: SanityImage;
}

interface CocktailsSectionProps {
  _type: 'cocktailsSection';
  _key: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: { slug: { current: string } };
  cocktails: CocktailProps[];
}

function CocktailCard({ name, image }: CocktailProps) {
  return (
    <div className="relative">
      <div className="w-96 h-[480px] rounded-2xl overflow-hidden">
        <div className="w-96 h-[480px] absolute bg-zinc-300"></div>
        <SanityImageBlock
          fill
          image={image}
          className="object-cover"
        />
      </div>
      <div className="mt-6 text-center justify-start text-stone-400 text-7xl font-normal font-['Karl_Geoff'] leading-[80px]">
        {name}
      </div>
    </div>
  );
}

export default function CocktailsSection({ 
  title, 
  description, 
  buttonText, 
  buttonLink, 
  cocktails 
}: CocktailsSectionProps) {
  return (
    <div className="w-[1500px] mx-auto my-10">
      <div className="text-center mb-16">
        <div className="text-center justify-start text-stone-400 text-base font-['Brandon_Grotesque'] uppercase leading-none tracking-widest mb-4">
          {title}
        </div>
        <div className="w-[722px] mx-auto text-center justify-start text-white text-4xl font-normal font-['Cormorant_Garamond'] leading-10">
          {description}
        </div>
        <Link href={buttonLink.slug.current} className="mt-8 inline-block">
          <div className="h-10 px-5 py-2 bg-black/0 rounded-[40px] outline outline-[0.50px] outline-offset-[-0.50px] outline-white/50 backdrop-blur-[10px] inline-flex justify-center items-center gap-2.5">
            <div className="justify-start text-white text-sm font-['Brandon_Grotesque'] uppercase leading-none tracking-wider">
              {buttonText}
            </div>
          </div>
        </Link>
      </div>
      <div className="flex justify-between">
        {cocktails.map((cocktail, index) => (
          <CocktailCard key={index} {...cocktail} />
        ))}
      </div>
    </div>
  );
}
