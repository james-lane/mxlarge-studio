import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {media} from 'sanity-plugin-media'
import {RobotIcon, RocketIcon} from '@sanity/icons'

export default defineConfig([
  {
    projectId: '8oyzogbt',
    name: 'Production',
    title: 'Production',
    icon: RocketIcon,
    basePath: '/production',
    dataset: 'production',
    plugins: [structureTool(), visionTool(), media()],

    schema: {
      types: schemaTypes,
    },
  },
  {
    projectId: '8oyzogbt',
    name: 'Development',
    title: 'Development',
    icon: RobotIcon,
    basePath: '/development',
    dataset: 'stub',
    plugins: [structureTool(), visionTool(), media()],

    schema: {
      types: schemaTypes,
    },
  },
])
