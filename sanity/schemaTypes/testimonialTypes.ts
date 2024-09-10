import { UserIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

const testimonialTypes = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'userImage',
      type: 'img',
    }),
    defineField({
      name: 'userHandle',
      type: 'string',
    }),
    defineField({
      name: 'userName',
      type: 'string',
    }),
    defineField({
      name: 'userTestimonial',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'userName',
      media: 'userImage.image',
    },
  },
})

const types = [testimonialTypes]

export default types
