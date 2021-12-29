import RegExpParser from './RegExp/RegExpParser';
import mergeAffixes from './RegExp/mergeAffixes';
import mergeCharacterClasses from './RegExp/mergeCharacterClasses';
import mergeSequences from './RegExp/mergeSequences';

import type {Node} from './RegExp/RegExpParser';

export default function compileRegExp(regExp: RegExp): Node {
  let node = new RegExpParser(regExp).parse();

  // TODO: think about whether I need to run multiple passes here
  // (as in, wherhet merging affixes might allow the other optimizations to make
  // more progress)
  node = mergeCharacterClasses(node);
  node = mergeSequences(node);
  node = mergeAffixes(node);

  return node;
}
