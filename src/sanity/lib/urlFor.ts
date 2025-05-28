// src/sanity/lib/urlFor.ts
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { client as sanityClient } from './client';

const builder = imageUrlBuilder(sanityClient);

export default function urlFor(source: SanityImageSource | null | undefined) {
  if (!source) {
    console.warn('Image source is null or undefined');
    return '';
  }
  
  try {
    return builder.image(source).url(); // Ensure .url() is called
  } catch (error) {
    console.error('Error generating image URL:', error);
    return '';
  }
}
