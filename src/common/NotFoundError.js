/**
 * @flow strict
 */

import * as React from 'react';

export default class NotFoundError extends Error {
  component: React.Node;

  constructor(message: string, component: React.Node) {
    super(message);
    this.component = component;
  }
}

export function makeNotFound(
  message: string,
  component: React.Node,
): NotFoundError {
  return new NotFoundError(message, component);
}
