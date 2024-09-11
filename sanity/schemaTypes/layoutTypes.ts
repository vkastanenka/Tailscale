import { defineField, defineType, defineArrayMember } from 'sanity'

const layoutType = defineType({
  name: 'layout',
  title: 'Layout',
  type: 'document',
  fields: [
    defineField({
      name: 'navbarItems',
      type: 'array',
      of: [
        defineArrayMember({ type: 'navbarDropdown' }),
        defineArrayMember({ type: 'button' }),
      ],
    }),
    defineField({
      name: 'navbarCtaItems',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: { type: 'button' } })],
    }),
    defineField({
      name: 'ctaHeadingTop1',
      type: 'string',
    }),
    defineField({
      name: 'ctaHeadingTop2',
      type: 'string',
    }),
    defineField({
      name: 'ctaButton1',
      type: 'reference',
      to: { type: 'button' },
    }),
    defineField({
      name: 'ctaHeadingBottom',
      type: 'string',
    }),
    defineField({
      name: 'ctaButton2',
      type: 'reference',
      to: { type: 'button' },
    }),
    defineField({
      name: 'ctaImage',
      type: 'img',
    }),
    defineField({
      name: 'ctaCompanyLogos',
      type: 'array',
      of: [
        defineArrayMember({ type: 'reference', to: { type: 'companyLogo' } }),
      ],
    }),
    defineField({
      name: 'footerItems',
      type: 'array',
      of: [defineArrayMember({ type: 'footerItem' })],
    }),
    defineField({
      name: 'afterButtons',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: { type: 'button' } })],
    }),
    defineField({
      name: 'afterWireGuardTm',
      type: 'string',
    }),
    defineField({
      name: 'afterCopyright',
      type: 'string',
    }),
  ],
})

const navbarDropdown = defineType({
  name: 'navbarDropdown',
  title: 'Navbar Dropdown',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'columns',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'column',
          fields: [
            defineField({ name: 'heading', type: 'string' }),
            defineField({
              name: 'buttons',
              type: 'array',
              of: [defineArrayMember({ type: 'button' })],
            }),
          ],
        }),
      ],
    }),
  ],
})

const footerItem = defineType({
  name: 'footerItem',
  title: 'Footer Item',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'buttons',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'button',
        }),
      ],
    }),
  ],
})

const layoutTypes = [layoutType, navbarDropdown, footerItem]

export default layoutTypes
