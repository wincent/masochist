// Tell TS what this is, as per: https://bun.sh/docs/api/workers
declare var self: Worker;

import Bun from 'bun';
import * as prettier from 'prettier';

let options = undefined;
let id = undefined;

self.onmessage = async (event: MessageEvent) => {
  switch (event.data?.job) {
    case 'prepare':
      options = event.data?.options;
      id = event.data?.id;
      break;
    case 'format':
      if (!options) {
        throw new Error('got "format" message before "prepare"');
      }
      postMessage(`finished job (${event.data.path})`);
      break;
    case 'check':
      if (!options) {
        throw new Error('got "check" message before "prepare"');
      }
      const path = event.data?.path;
      const source = await Bun.file(path).text();
      const result = await prettier.check(source, {
        ...options,
        filepath: path,
      });
      postMessage({
        job: 'check',
        path,
        result,
      });
      break;
    case 'exit':
      process.exit();
      break;
    default:
      throw new Error('Unknown message');
  }
};
