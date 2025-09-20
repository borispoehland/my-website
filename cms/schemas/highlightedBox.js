import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'highlightedBox',
  type: 'object',
  title: 'Highlighted Box',
  fields: [
    defineField({
      name: 'text',
      type: 'blockContent',
      title: 'Text',
    }),
  ],
});
