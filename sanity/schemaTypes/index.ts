import { type SchemaTypeDefinition } from 'sanity'

import { blockContentType } from './blockContentType'
import { categoryType } from './categoryType'
import { postType } from './postType'
import { authorType } from './authorType'
import { homePageType, homePageBenefitType } from './homePageType'
import { imgType } from './img'
import { companyLogoType } from './companyLogoType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    homePageType,
    homePageBenefitType,
    imgType,
    companyLogoType,
  ],
}
