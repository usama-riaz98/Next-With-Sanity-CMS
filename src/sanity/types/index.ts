// src/sanity/types/index.ts
import type { SanityImageObject } from '@sanity/image-url/lib/types/types';

export type ResolvedSanityImageAsset = {
  url: string;
};

export type SanityImage = Omit<SanityImageObject, 'asset'> & {
  asset: ResolvedSanityImageAsset;
  alt?: string;
};

export type Navigation = {
  mainNav: SanityLink[];
  secondaryNav: SanityLink[];
};

export type HeaderNav = Navigation & {
  backgroundImage: SanityImage;
};

export type SanityLink = {
  title: string;
  isExternal: boolean;
  isNewWindow: boolean;
  external?: string;
  internal?: Route;
};

export type Route = {
  slug: {
    current: string;
  };
} & (
  | {
      isRedirect: true;
      redirectRoute: Route;
      page?: never;
    }
  | {
      isRedirect: false;
      page: Page;
      redirectRoute?: never;
    }
);

export type Page = {
  title: string;
  sections: Section[];
};

type BaseSection = {
  _type: string;
  _key: string;
};

type HomeHeroSection = BaseSection & {
  _type: 'homeHeroSection';
  backgroundImage: SanityImage;
};

type FeatureSection = BaseSection & {
  _type: 'featureSection';
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
};

export type Section = HomeHeroSection | FeatureSection;
