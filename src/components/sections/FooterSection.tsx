import type { SanityImage } from '@/sanity/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface FooterLinkProps {
  _key?: string;
  _type?: string;
  label: string;
  link: { slug?: { current: string }; _ref?: string; _type?: string };
}

// Navigation links now have the same structure as legal links

interface SocialLinkProps {
  platform: string;
  url: string;
}

interface NewsletterSectionProps {
  title: string;
  description: string;
  buttonText: string;
  emailPlaceholder: string;
  locationPlaceholder: string;
}

interface FooterSectionProps {
  _type: 'footerSection';
  _key: string;
  navigationLinks?: FooterLinkProps[];
  legalLinks: FooterLinkProps[];
  socialLinks: SocialLinkProps[];
  newsletterSection: NewsletterSectionProps;
  logo?: SanityImage;
}

export default function FooterSection({
  navigationLinks = [],
  legalLinks,
  socialLinks,
  newsletterSection,
  logo,
}: FooterSectionProps) {
  return (
    <footer className='w-full text-white'>
      <div className='mx-auto mt-20 w-full'>
        <div className='mx-auto mb-16 w-full max-w-screen-2xl px-8'>
          {navigationLinks && navigationLinks.length > 0 && (
            <div className='mx-auto flex w-full max-w-4xl justify-between'>
              <div className='flex flex-col items-center'>
                {navigationLinks.slice(0, 4).map((link, index) => {
                  const href = link.link?.slug?.current || (link.link?._ref ? '/' : '#');

                  return (
                    <Link key={`nav-col1-${index}`} href={href} className='mb-5 flex flex-col items-center'>
                      <div className="text-center font-['Cormorant_Garamond'] text-xl leading-normal font-normal text-white">
                        {link.label}
                      </div>
                    </Link>
                  );
                })}
              </div>

              {navigationLinks.length > 4 && (
                <div className='flex flex-col items-center'>
                  {navigationLinks.slice(4, 8).map((link, index) => {
                    const href = link.link?.slug?.current || (link.link?._ref ? '/' : '#');
                    return (
                      <Link key={`nav-col2-${index}`} href={href} className='mb-5 flex flex-col items-center'>
                        <div className="text-center font-['Cormorant_Garamond'] text-xl leading-normal font-normal text-white">
                          {link.label}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}

              {/* Third column */}
              {navigationLinks.length > 8 && (
                <div className='flex flex-col items-center'>
                  {navigationLinks.slice(8).map((link, index) => {
                    const href = link.link?.slug?.current || (link.link?._ref ? '/' : '#');
                    return (
                      <Link key={`nav-col3-${index}`} href={href} className='mb-5 flex flex-col items-center'>
                        <div className="text-center font-['Cormorant_Garamond'] text-xl leading-normal font-normal text-white">
                          {link.label}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>

        <div className='mx-auto mt-16 flex h-12 w-full max-w-screen-2xl items-center px-8'>
          {/* Social Links on the left */}
          <div className='flex w-1/3 justify-start'>
            {socialLinks &&
              socialLinks.length > 0 &&
              socialLinks.map((social, index) => {
                if (!social || !social.url) {
                  return null;
                }

                const getSocialIcon = (platform: string): React.ReactNode => {
                  switch (platform.toLowerCase()) {
                    case 'instagram':
                      return (
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='20'
                          height='20'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='white'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <rect x='2' y='2' width='20' height='20' rx='5' ry='5'></rect>
                          <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'></path>
                          <line x1='17.5' y1='6.5' x2='17.51' y2='6.5'></line>
                        </svg>
                      );
                    case 'facebook':
                      return (
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='20'
                          height='20'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='white'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z'></path>
                        </svg>
                      );
                    case 'twitter':
                    case 'x':
                      return (
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='20'
                          height='20'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='white'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z'></path>
                        </svg>
                      );
                    default:
                      return <div className='text-sm text-white'>{social.platform}</div>;
                  }
                };

                return (
                  <Link
                    key={`social-${index}`}
                    href={social.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='mr-6'
                  >
                    {getSocialIcon(social.platform)}
                  </Link>
                );
              })}
          </div>

          <div className='flex w-1/3 items-center justify-center'>
            {legalLinks &&
              legalLinks.length > 0 &&
              legalLinks.map((link, index) => {
                const href = link.link?.slug?.current || (link.link?._ref ? '/' : '#');

                return (
                  <Link key={`legal-${index}`} href={href} className='mx-4'>
                    <div className="justify-start font-['Brandon_Grotesque'] text-xs leading-3 tracking-wide text-white uppercase">
                      {link.label}
                    </div>
                  </Link>
                );
              })}
          </div>

          <div className='flex w-1/3 justify-end'>
            {logo && logo.asset?.url && (
              <div className='relative h-5 w-24'>
                <Image src={logo.asset.url} alt='Logo' fill className='object-contain' />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className='mx-auto mt-16 h-28 w-[1440px] bg-black'>
        <div className='flex h-full items-center justify-between px-10'>
          <div className='inline-flex flex-col items-start justify-start'>
            <div className="justify-start self-stretch font-['Cormorant_Garamond'] text-3xl leading-loose font-normal text-white">
              {newsletterSection.title}
            </div>
            <div className="justify-start self-stretch font-['Brandon_Grotesque'] text-base leading-normal text-white opacity-60">
              {newsletterSection.description}
            </div>
          </div>

          <div className='flex h-10 w-[570px] items-center'>
            <div className='relative mr-4 h-10 w-56'>
              <div className="absolute top-[11px] left-0 justify-start font-['Brandon_Grotesque'] text-lg leading-none text-white opacity-40">
                {newsletterSection.emailPlaceholder}
              </div>
              <div className='absolute top-[39px] left-0 h-px w-56 bg-white opacity-50'></div>
            </div>

            <div className='relative mr-4 h-10 w-56'>
              <div className='absolute top-[13px] left-[220px] h-3.5 w-3.5 origin-top-left rotate-90 overflow-hidden'>
                <div className='absolute top-0 left-0 h-3.5 w-3.5'></div>
                <div className='absolute top-[5.25px] left-[2.63px] h-1 w-2 outline outline-1 outline-offset-[-0.44px] outline-white'></div>
              </div>
              <div className="absolute top-[11px] left-0 justify-start font-['Brandon_Grotesque'] text-lg leading-none text-white opacity-40">
                {newsletterSection.locationPlaceholder}
              </div>
              <div className='absolute top-[39px] left-0 h-px w-56 bg-white opacity-50'></div>
            </div>

            <button className='inline-flex h-10 items-center justify-center gap-2.5 px-5 py-2 outline outline-1 outline-offset-[-1px] outline-white'>
              <div className="justify-start font-['Brandon_Grotesque'] text-xs leading-3 tracking-wider text-white uppercase">
                {newsletterSection.buttonText}
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
