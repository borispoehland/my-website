import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'break',
  type: 'object',
  title: 'Break',
  fields: [
    defineField({
      name: 'style',
      type: 'string',
      title: 'Style',
      options: {
        list: [
          { title: 'Section Break', value: 'sectionBreak' },
          { title: 'Light Section Break', value: 'lightSectionBreak' },
          { title: 'Line Break', value: 'lineBreak' },
          { title: 'New Line Break', value: 'newLineBreak' },
        ],
        layout: 'radio',
      },
    }),
  ],
});
