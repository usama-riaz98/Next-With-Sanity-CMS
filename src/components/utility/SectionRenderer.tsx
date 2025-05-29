import type { Page, SanityImage } from '@/sanity/types';
import CocktailsSection from '../sections/CocktailsSection';
import DualContentSection from '../sections/DualContentSection';
import FeatureSection from '../sections/FeatureSection';
import FooterSection from '../sections/FooterSection';
import HeroSection from '../sections/HeroSection';
import HomeHeroSection from '../sections/HomeHeroSection';
import InstagramSection from '../sections/InstagramSection';
import LocationsSection from '../sections/LocationsSection';
import TocaTuesdaySection from '../sections/TocaTuesdaySection';

// Define props types for each section component
interface HomeHeroSectionProps {
  _type: 'homeHeroSection';
  _key: string;
  backgroundImage: Page['sections'][number] extends { _type: 'homeHeroSection' }
    ? Page['sections'][number]['backgroundImage']
    : never;
}

interface HeroSectionProps {
  _type: 'heroSection';
  _key: string;
  backgroundImage: SanityImage;
  headingTop: string;
  headingMiddle: string;
  headingBottom: string;
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

interface TocaTuesdaySectionProps {
  _type: 'tocaTuesdaySection';
  _key: string;
  backgroundImage: SanityImage;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: { slug: { current: string } };
}

interface DualContentSectionProps {
  _type: 'dualContentSection';
  _key: string;
  leftPanel: {
    backgroundImage: SanityImage;
    title: string;
    description: string;
    buttonText: string;
    buttonLink: { slug: { current: string } };
  };
  rightPanel: {
    backgroundImage: SanityImage;
    title: string;
    description: string;
    buttonText: string;
    buttonLink: { slug: { current: string } };
  };
}

interface LocationsSectionProps {
  _type: 'locationsSection';
  _key: string;
  title: string;
  locations: {
    name: string;
    backgroundImage: SanityImage;
    buttonText: string;
    buttonLink: { slug: { current: string } };
  }[];
}

interface CocktailsSectionProps {
  _type: 'cocktailsSection';
  _key: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: { slug: { current: string } };
  cocktails: {
    name: string;
    image: SanityImage;
  }[];
}

interface InstagramSectionProps {
  _type: 'instagramSection';
  _key: string;
  title: string;
  description: string;
  instagramHandle: string;
  images: {
    image: SanityImage;
    link?: string;
  }[];
}

interface FooterSectionProps {
  _type: 'footerSection';
  _key: string;
  navigationLinks?: {
    label: string;
    link: { slug: { current: string } };
  }[];
  navigationColumns?: {
    title: string;
    links: {
      label: string;
      link: { slug: { current: string } };
    }[];
  }[];
  legalLinks: {
    label: string;
    link: { slug: { current: string } };
  }[];
  socialLinks: {
    platform: string;
    url: string;
  }[];
  newsletterSection: {
    title: string;
    description: string;
    buttonText: string;
    emailPlaceholder: string;
    locationPlaceholder: string;
  };
  logo?: SanityImage;
}

// Type the sections map with a mapped type that matches the section _type to its props
const sections: {
  [K in Page['sections'][number] as K['_type']]: React.ComponentType<
    K extends { _type: 'homeHeroSection' }
      ? HomeHeroSectionProps
      : K extends { _type: 'heroSection' }
        ? HeroSectionProps
        : K extends { _type: 'featureSection' }
          ? FeatureSectionProps
          : K extends { _type: 'tocaTuesdaySection' }
            ? TocaTuesdaySectionProps
            : K extends { _type: 'dualContentSection' }
              ? DualContentSectionProps
              : K extends { _type: 'locationsSection' }
                ? LocationsSectionProps
                : K extends { _type: 'cocktailsSection' }
                  ? CocktailsSectionProps
                  : K extends { _type: 'instagramSection' }
                    ? InstagramSectionProps
                    : K extends { _type: 'footerSection' }
                      ? FooterSectionProps
                      : never
  >;
} = {
  homeHeroSection: HomeHeroSection,
  heroSection: HeroSection,
  featureSection: FeatureSection,
  tocaTuesdaySection: TocaTuesdaySection,
  dualContentSection: DualContentSection,
  locationsSection: LocationsSection,
  cocktailsSection: CocktailsSection,
  instagramSection: InstagramSection,
  footerSection: FooterSection,
};

export function SectionRenderer({ section }: Readonly<{ section: Page['sections'][number] }>) {
  console.log(`Rendering section: ${section._type}`, section);

  const Component = sections[section._type];

  if (!Component) {
    console.warn(`No component found for section type: ${section._type}`);
    return null;
  }

  try {
    return <Component {...(section as any)} />;
  } catch (error) {
    console.error(`Error rendering ${section._type} section:`, error);
    return (
      <div className='w-full bg-red-900 py-10 text-center text-white'>
        <p>Error rendering {section._type} section</p>
      </div>
    );
  }
}
