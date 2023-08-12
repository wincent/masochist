import {parse} from '@masochist/legacy';

import run from './benchmark-parser';

run(parse).catch((error) => {
  console.log(error);
});
