// src/components/utility/SanityImageBlock.tsx
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
  const imageSrc = image.asset?.url || urlFor(image);

  console.log('Image Data:', image);
  console.log('Image Src:', imageSrc);

  if (!imageSrc) {
    console.warn('No valid image source found:', image);
    return null;
  }

  return (
    <div className={className} style={style}>
      {fill ? (
        <Image src={imageSrc} alt={image.alt || 'Image'} fill priority={priority} className='object-cover' />
      ) : (
        <Image
          src={imageSrc}
          alt={image.alt || 'Image'}
          width={800}
          height={600}
          priority={priority}
          className='object-cover'
        />
      )}
    </div>
  );
}
