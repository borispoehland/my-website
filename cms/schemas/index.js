import post from './post';
import author from './author';
import blockContent from './blockContent';
import comment from './comment';
import aBreak from './break';
import highlightedBox from './highlightedBox';
import codeWithHighlightedLines, {
  codeHighlightRange,
} from './codeWithHighlightedLines';

export const schemaTypes = [
  post,
  author,
  blockContent,
  comment,
  aBreak,
  highlightedBox,
  codeWithHighlightedLines,
  codeHighlightRange,
];
