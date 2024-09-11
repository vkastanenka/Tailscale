import { createClient } from '@sanity/client'
import sanityImage from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

import { apiVersion, dataset, projectId } from './env'

const options = {
  dataset,
  projectId,
  useCdn: true,
  apiVersion,
}

export const sanityClient = createClient(options)
export const imageBuilder = sanityImage(sanityClient)

export const urlFor = (source: SanityImageSource) => {
  return imageBuilder.image(source)
}