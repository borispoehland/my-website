import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { codeInput } from '@sanity/code-input';
import { schemaTypes } from './schemas';
import resolveProductionUrl from './resolveProductionUrl';

export default defineConfig({
  name: 'default',
  title: 'Boris Pöhland Blog CMS',

  projectId: 'placeholder', // replace with real projectId
  dataset: 'placeholder', // replace with your dataset

  basePath: '/cms',

  plugins: [deskTool(), visionTool(), codeInput()],

  schema: {
    types: schemaTypes,
  },

  document: {
    productionUrl: async (prev, context) => {
      return resolveProductionUrl(context);
    },
  },
});
