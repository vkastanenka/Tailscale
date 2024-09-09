import { defineField, defineType } from 'sanity'

const colorInputType = defineType({
    name: 'colorInput',
    title: 'Color Input',
    type: 'document',
    fields: [
      defineField({
        name: 'title',
        type: 'string',
      }),
      defineField({
        name: 'color',
        type: 'color',
      }),
    ],
    preview: {
      select: {
        title: 'title',
      },
    },
  })

const types = [colorInputType]

export default types