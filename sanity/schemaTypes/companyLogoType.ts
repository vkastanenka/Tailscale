import { RobotIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const companyLogoType = defineType({
  name: 'companyLogo',
  title: 'Company Logo',
  type: 'document',
  icon: RobotIcon,
  fields: [
    defineField({
      name: 'image',
      type: 'img',
    }),
  ],
  preview: {
    select: {
      title: 'image.altText',
      media: 'image.image',
    },
  },
})
