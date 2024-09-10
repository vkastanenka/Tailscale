// Components
import Hero from '@/app/components/hero'
import HowItWorks from './components/howItWorks'
import Feature, { FeatureGradient } from './components/feature'
import Integrations from './components/integrations'
import Homelab from './components/homelab'
import Testimonials from './components/testimonials'
import Benefits from './components/benefits'
import Security from './components/security'
import Documentation from './components/documentation'

// Utilities
import cx from 'classnames'

// Sanity
import { client } from '@/sanity/lib/client'
import { HOME_PAGE_QUERY } from '@/sanity/lib/queries'

export default async function Home() {
  const homePageData = await client.fetch(HOME_PAGE_QUERY)

  // console.log(homePageData.testimonialsList1)

  return (
    <main className={cx('mt-[-60px]', 'lg:mt-[-66px]')}>
      <Hero
        sanityData={{
          heroHeading1: homePageData.heroHeading1,
          heroHeading2: homePageData.heroHeading2,
          heroHeadingList: homePageData.heroHeadingList,
          heroSubheading: homePageData.heroSubheading,
          heroImageDesktop: homePageData.heroImageDesktop,
          heroImageMobile: homePageData.heroImageMobile,
          heroCompanyTrustHeading: homePageData.heroCompanyTrustHeading,
          companyLogos: homePageData.companyLogos,
        }}
      />
      <HowItWorks
        sanityData={{
          howItWorksHeading: homePageData.howItWorksHeading,
          howItWorksSubheading: homePageData.howItWorksSubheading,
        }}
      />
      <Feature
        sanityData={{
          featureHeading: homePageData.feature1Heading,
          featureHeadingMaxWidth: homePageData.feature1HeadingMaxWidth,
          featureSubheading: homePageData.feature1Subheading,
          featureSubheadingMaxWidth: homePageData.feature1SubheadingMaxWidth,
          featureImage: homePageData.feature1Image,
        }}
      />
      <Feature
        sanityData={{
          featureHeading: homePageData.feature2Heading,
          featureHeadingMaxWidth: homePageData.feature2HeadingMaxWidth,
          featureSubheading: homePageData.feature2Subheading,
          featureSubheadingMaxWidth: homePageData.feature2SubheadingMaxWidth,
          featureImage: homePageData.feature2Image,
        }}
      />
      <Feature
        sanityData={{
          featureHeading: homePageData.feature3Heading,
          featureHeadingMaxWidth: homePageData.feature3HeadingMaxWidth,
          featureSubheading: homePageData.feature3Subheading,
          featureSubheadingMaxWidth: homePageData.feature3SubheadingMaxWidth,
          featureImage: homePageData.feature3Image,
        }}
      />
      <Feature
        sanityData={{
          featureHeading: homePageData.feature4Heading,
          featureHeadingMaxWidth: homePageData.feature4HeadingMaxWidth,
          featureSubheading: homePageData.feature4Subheading,
          featureSubheadingMaxWidth: homePageData.feature4SubheadingMaxWidth,
          featureImage: homePageData.feature4Image,
        }}
        className={cx('relative')}
      >
        <FeatureGradient />
      </Feature>
      <Integrations
        sanityData={{
          integrationsHeading1: homePageData.workflowHeading1,
          integrationsHeading2: homePageData.workflowHeading2,
        }}
      />
      <Homelab
        sanityData={{
          homelabHeading: homePageData.homelabHeading,
          homelabImage: homePageData.homelabImage,
          homelabSubheading: homePageData.homelabSubheading,
          homelabTitle: homePageData.homelabTitle,
        }}
      />
      <Testimonials
        sanityData={{
          testimonialsHeading: homePageData.testimonialsHeading,
          testimonialsList1: homePageData.testimonialsList1,
          testimonialsList2: homePageData.testimonialsList2,
          testimonialsList3: homePageData.testimonialsList3,
        }}
      />
      <Benefits
        sanityData={{
          benefitsHeading: homePageData.benefitsHeading,
          benefitsList: homePageData.benefitsList,
          accoladesList: homePageData.accoladesList,
        }}
      />
      <Security
        sanityData={{
          securityHeading: homePageData.securityheading,
          securitySubheading: homePageData.securitySubheading,
          securityImages: homePageData.securityImages,
        }}
      />
      <Documentation
        sanityData={{
          workflowHeading: homePageData.workflowHeading,
          workflowSubheading: homePageData.workflowSubheading,
          workflowImage: homePageData.workflowImage,
          quickstartTitle: homePageData.quickstartTitle,
          quickstartHeading: homePageData.quickstartHeading,
          quickstartSubheading: homePageData.quickstartSubheading,
          quickstartImage: homePageData.quickstartImage,
        }}
      />
    </main>
  )
}
