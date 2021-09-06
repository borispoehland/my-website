export const codeHighlightRange = {
  name: 'codeHighlightRange',
  type: 'object',
  title: 'Range',
  fields: [
    {
      name: 'start',
      title: 'Start',
      type: 'number',
    },
    {
      name: 'end',
      title: 'End',
      type: 'number',
    },
  ],
};

export default {
  name: 'codeWithHighlightedLines',
  type: 'object',
  title: 'Code',
  fields: [
    {
      name: 'codeBox',
      title: 'Code',
      type: 'code',
    },
    {
      name: 'codeHighlightRange',
      title: 'Code highlight range',
      type: 'codeHighlightRange',
    },
  ],
};
