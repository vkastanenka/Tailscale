import { defineField, defineType } from 'sanity'

export const imgType = defineType({
  name: 'img',
  title: 'Image',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'altText',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'altText',
      media: 'image',
    },
  },
})
