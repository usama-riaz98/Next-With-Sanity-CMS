// src/components/sections/FeatureSection.tsx
import type { SanityImage } from '@/sanity/types';
import SanityImageBlock from '../utility/SanityImageBlock';

interface FeatureSectionProps {
  _type: 'featureSection';
  _key: string;
  title: string;
  backgroundColor: { hex: string } | string;
  tocaTuesday: {
    backgroundImage: SanityImage;
    title: string;
    description: string;
    buttonText: string;
    buttonLink: { slug: { current: string } };
  };
  items: {
    title: string;
    backgroundImage: SanityImage;
    description: string;
    buttonText: string;
    buttonLink: { slug: { current: string } };
  }[];
}

export default function FeatureSection({ title, backgroundColor, tocaTuesday, items }: FeatureSectionProps) {
  const sectionBgColor = typeof backgroundColor === 'string' ? backgroundColor : backgroundColor?.hex || '#161616';
  return (
    <section className='w-full py-12' style={{ backgroundColor: sectionBgColor }}>
      <div className='container mx-auto px-4'>
        <h2 className='mb-8 text-center font-serif text-4xl text-white md:text-5xl'>{title}</h2>
        {/* Toca Tuesday - Full Width (First Row) */}
        <div className='relative mb-6 w-full'>
          <SanityImageBlock
            fill
            image={tocaTuesday.backgroundImage}
            className='h-64 overflow-hidden rounded-lg object-cover md:h-96'
            style={{ width: '100%' }}
          />
          <div className='bg-opacity-50 absolute inset-0 flex flex-col items-center justify-center bg-black p-4 text-white'>
            <h3 className='mb-2 font-serif text-2xl md:text-3xl'>{tocaTuesday.title}</h3>
            <p className='mx-auto max-w-md text-center text-sm md:text-base'>{tocaTuesday.description}</p>
            <a
              href={`/${tocaTuesday.buttonLink.slug.current}`} // Prepend slash for internal route
              className='mt-4 inline-block rounded bg-white px-4 py-2 text-black hover:bg-gray-200'
            >
              {tocaTuesday.buttonText}
            </a>
          </div>
        </div>
        {/* Items - Second Row */}
        <div className='flex flex-col gap-6 md:flex-row'>
          {items.map((item, index) => (
            <div key={index} className='relative min-h-[200px] flex-1 md:min-h-[250px]'>
              <SanityImageBlock
                fill
                image={item.backgroundImage}
                className='h-full overflow-hidden rounded-lg object-cover'
              />
              <div className='bg-opacity-50 absolute inset-0 flex flex-col items-center justify-center bg-black p-4 text-white'>
                <h3 className='mb-2 font-serif text-xl md:text-2xl'>{item.title}</h3>
                <p className='mx-auto max-w-md text-center text-sm md:text-base'>{item.description}</p>
                <a
                  href={`/${item.buttonLink.slug.current}`} // Prepend slash for internal route
                  className='mt-4 inline-block rounded bg-white px-4 py-2 text-black hover:bg-gray-200'
                >
                  {item.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
