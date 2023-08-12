import {parse} from '@masochist/parser';

import run from './benchmark-parser';

run(parse).catch((error) => {
  console.log(error);
});
