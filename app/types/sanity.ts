export interface SanityButton {
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
