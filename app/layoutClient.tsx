'use client'

// components
import Navbar from './components/navbar'
import MobileNav from './components/mobileNav'
import LayoutCta from './components/layoutCta'
import Footer from './components/footer'

// utils
import cx from 'classnames'
import { useState, useEffect } from 'react'

const LayoutClient = ({ ...props }) => {
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
      />
      <MobileNav mobileNavIsVisible={mobileNavVisible} />
      {props.children}
      <LayoutCta />
      <Footer />
    </div>
  )
}

export default LayoutClient
