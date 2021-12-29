import RegExpParser from './RegExp/RegExpParser';
import mergeCharacterClasses from './RegExp/mergeCharacterClasses';
import mergeSequences from './RegExp/mergeSequences';

import type {Node} from './RegExp/RegExpParser';

export default function compileRegExp(regExp: RegExp): Node {
  let node = new RegExpParser(regExp).parse();

  node = mergeCharacterClasses(node);
  node = mergeSequences(node);

  return node;
}
