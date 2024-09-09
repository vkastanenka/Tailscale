import { type SchemaTypeDefinition } from 'sanity'

import { blockContentType } from './blockContentType'
import { categoryType } from './categoryType'
import { postType } from './postType'
import { authorType } from './authorType'
import { homePageType, homePageHeroHeadingListItemType, homePageBenefitType } from './homePageType'
import { imgType } from './img'
import { companyLogoType } from './companyLogoType'
import colorInputType from './colorInputType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    homePageType,
    homePageHeroHeadingListItemType,
    homePageBenefitType,
    imgType,
    companyLogoType,
    ...colorInputType
  ],
}
