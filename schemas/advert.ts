import {defineField, defineType} from 'sanity'
import {ImagesIcon} from '@sanity/icons'

export default defineType({
  name: 'advert',
  title: 'Adverts',
  type: 'document',
  icon: ImagesIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'advertCategory',
      title: 'Advert Category',
      type: 'string',
      options: {
        list: [
          {title: 'Billboard', value: 'billboard'},
          {title: 'Leaderboard', value: 'leaderboard'},
          {title: 'Medium Rectangle', value: 'medium-rectangle'},
          {title: 'Sidebar', value: 'sidebar'},
          {title: 'Wallpaper', value: 'wallpaper'},
        ],
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'advertCategory',
      media: 'mainImage',
    },
  },
})
