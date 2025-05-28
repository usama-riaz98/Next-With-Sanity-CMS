// src/components/utility/SanityImageBlock.tsx
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
  return (
    <div className={className} style={style}>
      {fill ? (
        <Image src={image.asset.url} alt={image.alt || 'Image'} fill priority={priority} className='object-cover' />
      ) : (
        <Image
          src={image.asset.url}
          alt={image.alt || 'Image'}
          width={800} // Adjust based on your needs
          height={600}
          priority={priority}
          className='object-cover'
        />
      )}
    </div>
  );
}
