import { defineQuery } from 'next-sanity'

export const HOME_PAGE_QUERY = defineQuery(`*[_type == "homePage"][0]{
  title,

  // Hero
  heroHeading1,
  heroHeading2,
  heroHeadingList[]{"hex": color->color.hex, text},
  heroSubheading,
  heroImageDesktop{"url": image.asset->url, "dimensions": image.asset->metadata.dimensions, altText, },
  heroImageMobile{"url": image.asset->url, "dimensions": image.asset->metadata.dimensions, altText},
  // companyLogos[]->{"url": image.image.asset->url, "altText": image.altText},
  // feature1Image{"url": image.asset->url, altText},
  // feature2Image{"url": image.asset->url, altText},
  // feature4Image{"url": image.asset->url, altText},
  // benefitsList[]{"imageUrl": image.image.asset->url, "imageAltText": image.altText, heading, subheading},
  // securityImages[]{"url": image.asset->url, altText},
  // documentationWorkflowImage{"url": image.asset->url, altText},
  // documentationQuickstartImage{"url": image.asset->url, altText},
}`)
