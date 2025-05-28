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
        _key,
        _type == "homeHeroSection" => @ {
          ...,
          backgroundImage {
            ...,
            asset-> {
              url
            }
          }
        },
        _type == "heroSection" => @ {
          ...,
          backgroundImage {
            ...,
            asset-> {
              url
            }
          },
          headingTop,
          headingMiddle,
          headingBottom
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
        },
        _type == "tocaTuesdaySection" => @ {
          ...,
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
        _type == "dualContentSection" => @ {
          ...,
          leftPanel {
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
          rightPanel {
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
          }
        },
        _type == "locationsSection" => @ {
          ...,
          title,
          locations[] {
            name,
            backgroundImage {
              ...,
              asset-> {
                url
              }
            },
            buttonText,
            buttonLink-> {
              slug {
                current
              }
            }
          }
        },
        _type == "cocktailsSection" => @ {
          ...,
          title,
          description,
          buttonText,
          buttonLink-> {
            slug {
              current
            }
          },
          cocktails[] {
            name,
            image {
              ...,
              asset-> {
                url
              }
            }
          }
        },
        _type == "instagramSection" => @ {
          ...,
          title,
          description,
          instagramHandle,
          images[] {
            image {
              ...,
              asset-> {
                url
              }
            },
            link
          }
        },
        _type == "footerSection" => @ {
          ...,
          navigationColumns[] {
            title,
            links[] {
              label,
              link-> {
                slug {
                  current
                }
              }
            }
          },
          legalLinks[] {
            label,
            link-> {
              slug {
                current
              }
            }
          },
          socialLinks[] {
            platform,
            url
          },
          newsletterSection {
            title,
            description,
            buttonText,
            emailPlaceholder,
            locationPlaceholder
          },
          logo {
            ...,
            asset-> {
              url
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
