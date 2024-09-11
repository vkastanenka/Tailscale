export interface SanityButton {
  _type: string
  text: string
  href: string
}

export interface SanityImg {
  url: string
  dimensions: SanityImgDimensions
  altText: string
}

interface SanityImgDimensions {
  _type: string
  width: number
  aspectRatio: number
  height: number
}

export interface SanityNavbarDropdown {
  _type: string
  heading: string
  columns: { heading: string; buttons: SanityButton[] }[]
}