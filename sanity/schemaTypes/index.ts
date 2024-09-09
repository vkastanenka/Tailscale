import { type SchemaTypeDefinition } from 'sanity'

import { blockContentType } from './blockContentType'
import { categoryType } from './categoryType'
import { postType } from './postType'
import { authorType } from './authorType'
import homePageTypes from './homePageType'
import { imgType } from './img'
import { companyLogoType } from './companyLogoType'
import colorInputTypes from './colorInputType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    ...homePageTypes,
    imgType,
    companyLogoType,
    ...colorInputTypes
  ],
}
