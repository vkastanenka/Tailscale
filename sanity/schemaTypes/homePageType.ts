import { HomeIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const homePageType = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'heroImageDesktop',
      type: 'img',
    }),
    defineField({
      name: 'heroImageMobile',
      type: 'img',
    }),
    defineField({
      name: 'companyLogos',
      type: 'array',
      of: [
        defineArrayMember({ type: 'reference', to: { type: 'companyLogo' } }),
      ],
    }),
    defineField({
      name: 'feature1Image',
      type: 'img',
    }),
    defineField({
      name: 'feature2Image',
      type: 'img',
    }),
    defineField({
      name: 'feature4Image',
      type: 'img',
    }),
    defineField({
      name: 'benefitsList',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'homePageBenefit',
        }),
      ],
    }),
    defineField({
      name: 'securityImages',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'img',
        }),
      ],
    }),
    defineField({
      name: 'documentationWorkflowImage',
      type: 'img',
    }),
    defineField({
      name: 'documentationQuickstartImage',
      type: 'img',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'heroImageDesktop.image',
    },
  },
})

export const homePageBenefitType = defineType({
  name: 'homePageBenefit',
  title: 'Home Page Benefit',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      type: 'img',
    }),
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'subheading',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'image.image',
    },
  },
})
