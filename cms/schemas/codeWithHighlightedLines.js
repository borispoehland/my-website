import { defineType, defineField } from 'sanity';

export const codeHighlightRange = defineType({
  name: 'codeHighlightRange',
  type: 'object',
  title: 'Range',
  fields: [
    defineField({
      name: 'start',
      title: 'Start',
      type: 'number',
    }),
    defineField({
      name: 'end',
      title: 'End',
      type: 'number',
    }),
  ],
});

export default defineType({
  name: 'codeWithHighlightedLines',
  type: 'object',
  title: 'Code',
  fields: [
    defineField({
      name: 'codeBox',
      title: 'Code',
      type: 'code',
    }),
    defineField({
      name: 'codeHighlightRange',
      title: 'Code highlight range',
      type: 'codeHighlightRange',
    }),
  ],
});
