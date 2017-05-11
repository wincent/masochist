/**
 * @flow
 */

import type {Component} from 'react';

const set = new WeakSet();

function ifMounted(
  instance: Component<*, *, *>,
  callback: () => void,
): () => void {
  return function applyIfMounted() {
    if (set.has(instance)) {
      callback.apply(instance, arguments);
    }
  };
}

ifMounted.register = function register(instance) {
  set.add(instance);
};

ifMounted.unregister = function unregister(instance) {
  set.delete(instance);
};

export default ifMounted;
