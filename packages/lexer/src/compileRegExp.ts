import RegExpParser from './RegExp/RegExpParser';
import mergeSequences from './RegExp/mergeSequences';

import type {Node} from './RegExp/RegExpParser';

export default function compileRegExp(regExp: RegExp): Node {
  let node = new RegExpParser(regExp).parse();

  node = mergeSequences(node);

  return node;
}
