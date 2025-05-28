// src/sanity/lib/queries.ts
import { defineQuery } from 'next-sanity';

export const ROUTES_QUERY = defineQuery(`*[_type == "route"]`);

export const ROUTE_QUERY = defineQuery(`*[_type == "route" && slug.current == $slug][0]{
    ...,
    redirectRoute->{
      slug
    },
    page->{
      ...,
      sections[]{
        _type,
        _type == "homeHeroSection" => @ {
          ...,
          backgroundImage {
            ...,
            asset-> {
              url
            }
          }
        },
        _type == "featureSection" => @ {
          title,
          backgroundColor,
          tocaTuesday {
            backgroundImage {
              ...,
              asset-> {
                url
              }
            },
            title,
            description,
            buttonText,
            buttonLink-> {
              slug {
                current
              }
            }
          },
          items[] {
            title,
            backgroundImage {
              ...,
              asset-> {
                url
              }
            },
            description,
            buttonText,
            buttonLink-> {
              slug {
                current
              }
            }
          }
        }
      }
    }
  }`);

export const HEADER_NAV_QUERY = defineQuery(`*[_type == "headerNav"][0]{
    ...,
    mainNav[]{
      ...,
      internal->{
        slug{
          current
        }
      }
    },
    secondaryNav[]{
      ...,
      internal->{
        slug{
          current
        }
      }
    }
  }`);
