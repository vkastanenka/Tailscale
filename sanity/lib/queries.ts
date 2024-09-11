import { defineQuery } from 'next-sanity'

export const LAYOUT_QUERY = defineQuery(`*[_type == "layout"][0]{
  // after
  afterButtons[]->,
  afterCopyright,
  afterWireGuardTm,

  // cta
  ctaButton1->,
  ctaButton2->,
  ctaCompanyLogos[]->{"url": image.image.asset->url, "dimensions": image.image.asset->metadata.dimensions, "altText": image.altText},
  ctaHeadingBottom,
  ctaHeadingTop1,
  ctaHeadingTop2,
  ctaImage{"url": image.asset->url, "dimensions": image.asset->metadata.dimensions, altText, },

  // footer
  footerItems[],

  // navbar
  navbarCtaItems[]->,
  navbarItems[]
}`)

export const HOME_PAGE_QUERY = defineQuery(`*[_type == "homePage"][0]{
  title,

  // hero
  heroHeading1,
  heroHeading2,
  heroHeadingList[]{"hex": color->color.hex, text},
  heroSubheading,
  heroButton1->,
  heroButton2->,
  heroImageDesktop{"url": image.asset->url, "dimensions": image.asset->metadata.dimensions, altText, },
  heroImageMobile{"url": image.asset->url, "dimensions": image.asset->metadata.dimensions, altText},
  heroCompanyTrustHeading,
  companyLogos[]->{"url": image.image.asset->url, "dimensions": image.image.asset->metadata.dimensions, "altText": image.altText},

  // howItWorks
  howItWorksHeading,
  howItWorksSubheading,
  howItWorksButton->,

  // features
  feature1Heading,
  feature1HeadingMaxWidth,
  feature1Subheading,
  feature1SubheadingMaxWidth,
  feature1Button->,
  feature1Image{"url": image.asset->url, "dimensions": image.asset->metadata.dimensions, altText},

  feature2Heading,
  feature2HeadingMaxWidth,
  feature2Subheading,
  feature2SubheadingMaxWidth,
  feature2Button->,
  feature2Image{"url": image.asset->url, "dimensions": image.asset->metadata.dimensions, altText},

  feature3Heading,
  feature3HeadingMaxWidth,
  feature3Subheading,
  feature3SubheadingMaxWidth,
  feature3Button->,
  feature3Image{"url": image.asset->url, "dimensions": image.asset->metadata.dimensions, altText},

  feature4Heading,
  feature4HeadingMaxWidth,
  feature4Subheading,
  feature4SubheadingMaxWidth,
  feature4Button->,
  feature4Image{"url": image.asset->url, "dimensions": image.asset->metadata.dimensions, altText},

  // workflow
  integrationsHeading1,
  integrationsHeading2,
  integrationsIcons1[]{"url": image.asset->url, "dimensions": image.asset->metadata.dimensions, altText},
  integrationsIcons2[]{"url": image.asset->url, "dimensions": image.asset->metadata.dimensions, altText},
  integrationsButton1->,
  integrationsButton2->,

  // homelab
  homelabTitle,
  homelabHeading,
  homelabSubheading,
  homelabButton1->,
  homelabButton2->,
  homelabImage{"url": image.asset->url, "dimensions": image.asset->metadata.dimensions, altText},

  // testimonials
  testimonialsHeading,
  testimonialsList1[]->{..., "userImage": userImage{"url": image.asset->url, "dimensions": image.asset->metadata.dimensions, altText}},
  testimonialsList2[]->{..., "userImage": userImage{"url": image.asset->url, "dimensions": image.asset->metadata.dimensions, altText}},
  testimonialsList3[]->{..., "userImage": userImage{"url": image.asset->url, "dimensions": image.asset->metadata.dimensions, altText}},

  // benefits
  benefitsHeading,
  benefitsList[]{..., image{"url": image.asset->url, "dimensions": image.asset->metadata.dimensions, altText}},
  accoladesList[],

  // security
  securityHeading,
  securitySubheading,
  securityButton1->,
  securityButton2->,
  securityImages[]{"url": image.asset->url, "dimensions": image.asset->metadata.dimensions, altText},

  // documentation
  workflowHeading,
  workflowSubheading,
  workflowButton->,
  workflowImage{"url": image.asset->url, "dimensions": image.asset->metadata.dimensions, altText},

  quickstartTitle,
  quickstartHeading,
  quickstartSubheading,
  quickstartButton->,
  quickstartImage{"url": image.asset->url, "dimensions": image.asset->metadata.dimensions, altText},
}`)
