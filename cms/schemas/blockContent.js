import { defineType, defineField } from 'sanity';

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineField({
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [{ title: 'Bullet', value: 'bullet' }],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
          { title: 'Underline', value: 'underline' },
          { title: 'Strike', value: 'strike-through' },
        ],
      },
    }),
    defineField({
      type: 'image',
      fields: [
        defineField({
          title: 'Alternative Text',
          name: 'alt',
          type: 'string',
        }),
      ],
    }),
    defineField({
      type: 'codeWithHighlightedLines',
    }),
    defineField({
      type: 'break',
    }),
    defineField({
      type: 'highlightedBox',
    }),
  ],
});
