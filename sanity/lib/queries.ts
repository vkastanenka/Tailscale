import { defineQuery } from "next-sanity";

export const HOME_PAGE_QUERY = defineQuery(`*[_type == "homePage"][0]{
  title,

  // hero
  heroHeading1,
  heroHeading2,
  heroHeadingList[]{"hex": color->color.hex, text},
  heroSubheading,
  heroImageDesktop{"url": image.asset->url, "dimensions": image.asset->metadata.dimensions, altText, },
  heroImageMobile{"url": image.asset->url, "dimensions": image.asset->metadata.dimensions, altText},
  heroCompanyTrustHeading,
  companyLogos[]->{"url": image.image.asset->url, "dimensions": image.image.asset->metadata.dimensions, "altText": image.altText},

  // howItWorks
  howItWorksHeading,
  howItWorksSubheading,
  // howItWorksButton

  // features
  feature1Heading,
  feature1HeadingMaxWidth,
  feature1Subheading,
  feature1SubheadingMaxWidth,
  // feature1Button
  feature1Image{"url": image.asset->url, "dimensions": image.asset->metadata.dimensions, altText},

  feature2Heading,
  feature2HeadingMaxWidth,
  feature2Subheading,
  feature2SubheadingMaxWidth,
  // feature2Button
  feature2Image{"url": image.asset->url, "dimensions": image.asset->metadata.dimensions, altText},

  feature3Heading,
  feature3HeadingMaxWidth,
  feature3Subheading,
  feature3SubheadingMaxWidth,
  // feature3Button
  feature3Image{"url": image.asset->url, "dimensions": image.asset->metadata.dimensions, altText},

  feature4Heading,
  feature4HeadingMaxWidth,
  feature4Subheading,
  feature4SubheadingMaxWidth,
  // feature4Button
  feature4Image{"url": image.asset->url, "dimensions": image.asset->metadata.dimensions, altText},

  // workflow
  workflowHeading1,
  workflowHeading2,
  // workflowIcons1
  // workflowIcons2
  // workflowButton1,
  // workflowButton2

  // homelab
  homelabTitle,
  homelabHeading,
  homelabSubheading,
  // homelabButton1
  // homelabButton2
  homelabImage{"url": image.asset->url, "dimensions": image.asset->metadata.dimensions, altText},

  // benefits
  benefitsHeading,
  benefitsList[]{image{"url": image.asset->url, "dimensions": image.asset->metadata.dimensions, altText}, heading, subheading},
  accoladesList[],

  // security
  securityHeading,
  securitySubheading,
  securityImages[]{"url": image.asset->url, "dimensions": image.asset->metadata.dimensions, altText},
  // securityButton1,
  // securityButton2

  // documentation
  workflowHeading,
  workflowSubheading,
  workflowImage{"url": image.asset->url, "dimensions": image.asset->metadata.dimensions, altText},
  // workflowButton

  quickstartTitle,
  quickstartHeading,
  quickstartSubheading,
  quickstartImage{"url": image.asset->url, altText},
  // quickstartButton
}`);
