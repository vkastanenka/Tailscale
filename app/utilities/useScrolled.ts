import { useState, useEffect } from 'react'

const useScrolled = () => {
  const [windowScrolled, setWindowScrolled] = useState(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handler = () => setWindowScrolled(window.scrollY)
      window.addEventListener('scroll', handler)
      return () => window.removeEventListener('scroll', handler)
    }
  })

  return windowScrolled
}

export default useScrolled
