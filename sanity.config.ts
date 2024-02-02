import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {media} from 'sanity-plugin-media'
import {scheduledPublishing} from '@sanity/scheduled-publishing'

export default defineConfig({
  name: 'default',
  title: 'mxlarge',

  projectId: '8oyzogbt',
  dataset: 'stub',

  plugins: [deskTool(), visionTool(), media(), scheduledPublishing()],

  schema: {
    types: schemaTypes,
  },
})
