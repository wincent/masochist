import {parseDocument} from '@masochist/parser';

import run from './benchmark-parser';

run(parseDocument).catch((error) => {
  console.log(error);
});
