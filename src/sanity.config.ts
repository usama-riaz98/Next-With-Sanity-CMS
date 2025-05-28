import { apiVersion, dataset, projectId } from '@/sanity/env';
import { schemaTypes } from '@/sanity/schemas';
import { colorInput } from '@sanity/color-input';
import { visionTool } from '@sanity/vision';
import { defineConfig, type SchemaTypeDefinition } from 'sanity';
import { structureTool } from 'sanity/structure';

export default defineConfig({
  name: 'default',
  title: 'Toca Madera',
  basePath: '/admin',
  projectId,
  dataset,
  apiVersion,
  ignoreBrowserTokenWarning: true,

  plugins: [structureTool(), visionTool(), colorInput()],

  schema: {
    types: schemaTypes as SchemaTypeDefinition[],
  },
});
