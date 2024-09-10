import { defineField, defineType } from 'sanity'

const buttonType = defineType({
  name: 'button',
  title: 'Button',
  type: 'document',
  fields: [
    defineField({
      name: 'text',
      type: 'string',
    }),
    defineField({
      name: 'href',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'text',
      subtitle: 'href',
    },
  },
})

const buttonTypes = [buttonType]

export default buttonTypes
