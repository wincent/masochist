import {parse} from 'graphql';

import run from './benchmark-parser';

async function main() {
  await run(parse);
}

main().catch((error) => {
  console.log(error);
});
