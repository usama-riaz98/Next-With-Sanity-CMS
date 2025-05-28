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

  console.log('tocaTuesday backgroundImage:', tocaTuesday.backgroundImage);
  console.log(
    'items backgroundImage:',
    items.map((item) => item.backgroundImage)
  );

  return (
    <section className='w-full py-12' style={{ backgroundColor: sectionBgColor }}>
      <div className='container mx-auto px-4'>
        <h2 className='mb-8 text-center font-serif text-[48px] text-white md:text-[140px]'>{title}</h2>
        <div className='relative mb-6 w-full'>
          <SanityImageBlock
            fill
            image={tocaTuesday.backgroundImage}
            className='h-64 overflow-hidden rounded-lg object-cover md:h-96'
            style={{ width: '100%' }}
          />
          {/* Gradient overlay instead of solid black */}
          <div
            className='absolute inset-0 flex flex-col items-center justify-center p-4 text-white'
            style={{
              background: 'linear-gradient(to bottom, rgba(22, 22, 22, 0.8), transparent 40%, rgba(22, 22, 22, 0.8))',
            }}
          >
            <h3 className='mb-2 font-serif text-[48px] leading-tight tracking-wide uppercase md:text-[140px]'>
              {tocaTuesday.title}
            </h3>
            <p className='mx-auto max-w-md text-center text-sm md:text-base'>{tocaTuesday.description}</p>
            <a
              href={`/${tocaTuesday.buttonLink.slug.current}`}
              className='mt-4 inline-block rounded bg-white px-4 py-2 text-black hover:bg-gray-200'
            >
              {tocaTuesday.buttonText}
            </a>
          </div>
        </div>
        <div className='flex flex-col gap-6 md:flex-row'>
          {items.map((item, index) => (
            <div key={index} className='relative min-h-[200px] flex-1 md:min-h-[250px]'>
              <SanityImageBlock
                fill
                image={item.backgroundImage}
                className='h-[200px] overflow-hidden rounded-lg object-cover md:h-[250px]' // Explicit height
              />
              <div
                className='absolute inset-0 flex flex-col items-center justify-center p-4 text-white'
                style={{
                  background:
                    'linear-gradient(to bottom, rgba(22, 22, 22, 0.8), transparent 60%, rgba(22, 22, 22, 0.8))',
                }}
              >
                <h3 className='mb-2 font-serif text-xl md:text-2xl'>{item.title}</h3>
                <p className='mx-auto max-w-md text-center text-sm md:text-base'>{item.description}</p>
                <a
                  href={`/${item.buttonLink.slug.current}`}
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
