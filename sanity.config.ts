import {defineConfig} from 'sanity'
import { structureTool } from "sanity/structure";
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {media} from 'sanity-plugin-media'

export default defineConfig({
  name: 'default',
  title: 'mxlarge',

  projectId: '8oyzogbt',
  dataset: 'stub',

  plugins: [structureTool(), visionTool(), media()],

  schema: {
    types: schemaTypes,
  },
})
