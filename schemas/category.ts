import {defineField, defineType} from 'sanity'

const containsSpaces = (input?: string) => input && input.includes(' ')

export default defineType({
  name: 'category',
  title: 'Categories',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) =>
        rule
          .required()
          .custom((input) =>
            !containsSpaces(input?.current) ? true : 'Slug cannot contain spaces',
          ),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
})
