/**
 * @flow
 */

import type {Component} from 'react';

const map = new Map();

function ifMounted(
  instance: Component<*, *, *>,
  callback: () => void
): () => void {
  return function() {
    if (map.has(instance)) {
      callback.apply(instance, arguments);
    }
  };
}

ifMounted.register = function register(instance) {
  map.set(instance, true);
};

ifMounted.unregister = function unregister(instance) {
  if (!map.has(instance)) {
    throw new Error('ifMounted.unregister(): instance not present in map');
  }
  map.delete(instance);
};

export default ifMounted;
