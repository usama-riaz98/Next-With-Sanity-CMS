import { SectionRenderer } from '@/components/utility/SectionRenderer';
import { normalizeSlug, splitSlug } from '@/libs/functions';
import { sanityFetch } from '@/sanity/lib/client';
import { ROUTE_QUERY, ROUTES_QUERY } from '@/sanity/lib/queries';
import type { Route } from '@/sanity/types';
import { redirect } from 'next/navigation';

export async function generateStaticParams() {
  try {
    const routes: Route[] = await sanityFetch({
      query: ROUTES_QUERY,
      tags: ['route'],
    });

    return routes.map((route) => ({
      slug: splitSlug(route.slug.current),
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

// Fallback content when no Sanity data is available
function FallbackContent() {
  return (
    <main className='flex justify-center overflow-x-hidden bg-black text-white'>
      <div className='relative w-[1440px] overflow-hidden bg-neutral-900'>
        {/* Hero Section */}
        <div className='relative h-[900px] w-[1440px] overflow-hidden bg-black'>
          <div className='absolute inset-0 bg-black/70'></div>
          <div className='absolute top-1/2 left-1/2 z-20 w-[1003px] -translate-x-1/2 -translate-y-1/2 transform'>
            <div className='mb-[135px]'>
              <h2 className='font-serif text-9xl leading-[140px] tracking-[14px] text-white uppercase'>Modern</h2>
            </div>
            <div className='mb-[135px] ml-[293px]'>
              <h2 className='font-serif text-9xl leading-[140px] tracking-[14px] text-white uppercase'>Mexican</h2>
            </div>
            <div>
              <h2 className='font-serif text-9xl leading-[140px] tracking-[14px] text-white uppercase'>Steakhouse</h2>
            </div>
          </div>
        </div>

        {/* Toca Tuesday Section */}
        <div className='relative mx-auto my-10 h-[672px] w-[1360px] overflow-hidden rounded-2xl bg-black'>
          <div className='absolute inset-0 bg-black/50'></div>
          <div className='absolute inset-0 z-10 flex flex-col items-center justify-between py-20'>
            <div className='text-center'>
              <div className="mb-4 justify-start text-center font-['Brandon_Grotesque'] text-base leading-none tracking-widest text-stone-400 uppercase">
                TOCA TUESDAY
              </div>
              <div className="mx-auto w-[680px] justify-start text-center font-['Cormorant_Garamond'] text-4xl leading-10 font-normal text-white">
                Elevate Tuesdays with signature tacos, cocktails, and live entertainment.
              </div>
            </div>
            <div className='inline-flex h-10 items-center justify-center gap-2.5 rounded-[40px] bg-black/0 px-5 py-2 outline outline-[0.50px] outline-offset-[-0.50px] outline-white/50 backdrop-blur-[10px]'>
              <div className="justify-start font-['Brandon_Grotesque'] text-sm leading-none tracking-wider text-white uppercase">
                LEARN MORE
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className='mx-auto mt-16 h-28 w-[1440px] bg-black'>
          <div className='flex h-full items-center justify-between px-10'>
            <div className='inline-flex flex-col items-start justify-start'>
              <div className="justify-start self-stretch font-['Cormorant_Garamond'] text-3xl leading-loose font-normal text-white">
                Don't Miss Out
              </div>
              <div className="justify-start self-stretch font-['Brandon_Grotesque'] text-base leading-normal text-white opacity-60">
                Stay up to date on all the events happening at Toca Madera
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
  try {
    const { slug } = await params;

    const route: Route = await sanityFetch({
      query: ROUTE_QUERY,
      params: { slug: normalizeSlug(slug) },
      tags: ['route'],
      revalidate: 0, // Force revalidation on every request
    });

    if (!route) {
      console.log('No route found, showing fallback');
      return <FallbackContent />;
    }

    if (route.isRedirect) {
      return redirect(route.redirectRoute.slug.current);
    }

    if (!route.page || !route.page.sections || route.page.sections.length === 0) {
      console.log('No sections found, showing fallback');
      return <FallbackContent />;
    }

    return (
      <main>
        {route.page.sections.map((section, index) => (
          <SectionRenderer key={`section-${index}`} section={section} />
        ))}
      </main>
    );
  } catch (error) {
    console.error('Error rendering page:', error);
    return <FallbackContent />;
  }
}
