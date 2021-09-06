import createSchema from 'part:@sanity/base/schema-creator';

import schemaTypes from 'all:part:@sanity/base/schema-type';

import blockContent from './blockContent';
import post from './post';
import author from './author';
import comment from './comment';
import aBreak from './break';
import highlightedBox from './highlightedBox';
import codeWithHighlightedLines, {
  codeHighlightRange,
} from './codeWithHighlightedLines';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    post,
    author,
    blockContent,
    comment,
    aBreak,
    highlightedBox,
    codeWithHighlightedLines,
    codeHighlightRange,
  ]),
});
