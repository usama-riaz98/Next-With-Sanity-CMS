// src/components/utility/SectionRenderer.tsx
import type { Page, SanityImage } from '@/sanity/types';
import FeatureSection from '../sections/FeatureSection';
import HomeHeroSection from '../sections/HomeHeroSection';

// Define props types for each section component
interface HomeHeroSectionProps {
  _type: 'homeHeroSection';
  _key: string;
  backgroundImage: Page['sections'][number] extends { _type: 'homeHeroSection' }
    ? Page['sections'][number]['backgroundImage']
    : never;
}

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

// Type the sections map with a mapped type that matches the section _type to its props
const sections: {
  [K in Page['sections'][number] as K['_type']]: React.ComponentType<
    K extends { _type: 'homeHeroSection' }
      ? HomeHeroSectionProps
      : K extends { _type: 'featureSection' }
        ? FeatureSectionProps
        : never
  >;
} = {
  homeHeroSection: HomeHeroSection,
  featureSection: FeatureSection,
};

export function SectionRenderer({ section }: { section: Page['sections'][number] }) {
  const { _type } = section;

  const SectionComponent = sections[_type];

  if (!SectionComponent) {
    console.warn(`No component found for section type: ${_type}`);
    return null;
  }

  switch (_type) {
    case 'homeHeroSection':
      return <HomeHeroSection {...(section as HomeHeroSectionProps)} />;
    case 'featureSection':
      return <FeatureSection {...(section as FeatureSectionProps)} />;
    default:
      return null;
  }
}
