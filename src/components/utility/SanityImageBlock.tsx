'use client';

import urlFor from '@/sanity/lib/urlFor';
import type { SanityImage } from '@/sanity/types';
import Image from 'next/image';

interface SanityImageBlockProps {
  fill?: boolean;
  priority?: boolean;
  image: SanityImage;
  className?: string;
  style?: React.CSSProperties;
}

export default function SanityImageBlock({ fill, priority, image, className, style }: SanityImageBlockProps) {
  if (!image) {
    console.warn('Image is null or undefined');
    return null;
  }

  const placeholderImage = 'https://placehold.co/800x600';

  let imageSrc = '';
  try {
    if (image.asset?.url) {
      imageSrc = image.asset.url;
    } else if (image.asset && typeof image.asset === 'object') {
      imageSrc = urlFor(image) || '';
    } else if (typeof urlFor === 'function') {
      // Fallback to urlFor for any other format
      imageSrc = urlFor(image) || '';
    }
  } catch (error) {
    console.error('Error getting image URL:', error);
  }

  if (!imageSrc) {
    console.warn('Using placeholder image for:', image);
    imageSrc = placeholderImage;
  }
  if (!imageSrc || imageSrc === placeholderImage) {
    console.log('Image Data:', image);
    console.log('Image Src:', imageSrc);
  }
  const imageKey = `image-${imageSrc}`;

  const handleImageError = () => {
    console.warn('Failed to load image:', imageSrc);
  };

  return (
    <div className={className} style={style}>
      {fill ? (
        <Image
          key={imageKey}
          src={imageSrc}
          alt={image.alt || 'Image'}
          fill
          priority={priority}
          className='object-cover'
          onError={handleImageError}
        />
      ) : (
        <Image
          key={imageKey}
          src={imageSrc}
          alt={image.alt || 'Image'}
          width={800}
          height={600}
          priority={priority}
          className={className}
          onError={handleImageError}
        />
      )}
    </div>
  );
}
