'use client'

// components
import Navbar from '@components/navbar'
import MobileNav from '@components/mobileNav'
import LayoutCta from '@components/layoutCta'
import Footer from '@components/footer'

// utils
import cx from 'classnames'
import { useState, useEffect, HTMLAttributes } from 'react'

// types
import { SanityButton, SanityImg, SanityNavbarDropdown } from '@typescriptDefs/sanity'

interface LayoutClient {
  afterButtons: SanityButton[]
  afterCopyright: string
  afterWireGuardTm: string
  ctaButton1: SanityButton
  ctaButton2: SanityButton
  ctaCompanyLogos: SanityImg[]
  ctaHeadingBottom: string
  ctaHeadingTop1: string
  ctaHeadingTop2: string
  ctaImage: SanityImg
  footerItems: { heading: string; buttons: SanityButton[] }[]
  navbarCtaItems: SanityButton[]
  navbarItems: [SanityNavbarDropdown | SanityButton]
}

const LayoutClient = ({
  sanityData,
  ...props
}: {
  sanityData: LayoutClient
} & HTMLAttributes<HTMLDivElement>) => {
  const [mobileNavVisible, setMobileNavVisible] = useState<boolean>(false)

  useEffect(() => {
    document.body.style.overflow = mobileNavVisible ? 'hidden' : 'auto'
  }, [mobileNavVisible])

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <div className={cx('relative')}>
      <Navbar
        mobileNavIsVisible={mobileNavVisible}
        setMobileNavVisible={setMobileNavVisible}
        sanityData={{
          navbarCtaItems: sanityData.navbarCtaItems,
          navbarItems: sanityData.navbarItems,
        }}
      />
      <MobileNav
        mobileNavIsVisible={mobileNavVisible}
        sanityData={{
          afterButtons: sanityData.afterButtons,
          afterCopyright: sanityData.afterCopyright,
          afterWireGuardTm: sanityData.afterWireGuardTm,
          navbarItems: sanityData.navbarItems,
        }}
      />
      {props.children}
      <LayoutCta
        sanityData={{
          ctaButton1: sanityData.ctaButton1,
          ctaButton2: sanityData.ctaButton2,
          ctaCompanyLogos: sanityData.ctaCompanyLogos,
          ctaHeadingBottom: sanityData.ctaHeadingBottom,
          ctaHeadingTop1: sanityData.ctaHeadingTop1,
          ctaHeadingTop2: sanityData.ctaHeadingTop2,
          ctaImage: sanityData.ctaImage,
        }}
      />
      <Footer
        sanityData={{
          afterButtons: sanityData.afterButtons,
          afterCopyright: sanityData.afterCopyright,
          afterWireGuardTm: sanityData.afterWireGuardTm,
          footerItems: sanityData.footerItems,
        }}
      />
    </div>
  )
}

export default LayoutClient
