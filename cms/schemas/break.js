export default {
  name: 'break',
  type: 'object',
  title: 'Break',
  fields: [
    {
      name: 'style',
      type: 'string',
      options: {
        list: [
          'sectionBreak',
          'lightSectionBreak',
          'lineBreak',
          'newLineBreak',
        ],
        layout: 'radio',
      },
    },
  ],
};
