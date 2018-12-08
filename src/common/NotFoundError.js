/**
 * @flow strict-local
 */

export default class NotFoundError extends Error {
  // TODO: improve on any annotation
  constructor(message: string, component: any) {
    super(message);
    this.component = component;
  }
}

// TODO: fix this too
export function makeNotFound(message: string, component: any): NotFoundError {
  return new NotFoundError(message, component);
}
