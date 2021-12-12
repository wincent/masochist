/**
 *  strict
 */

import * as React from 'react';

export default class NotFoundError extends Error {
  component;

  constructor(message, component) {
    super(message);
    this.component = component;
  }
}

export function makeNotFound(message, component) {
  return new NotFoundError(message, component);
}
