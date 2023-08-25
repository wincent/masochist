import {parseDocument} from '@masochist/graphql';

import run from './benchmark-parser';

run(parseDocument).catch((error) => {
  console.log(error);
});
