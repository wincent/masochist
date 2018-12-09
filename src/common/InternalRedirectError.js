/**
 * @flow strict
 */

export default class InternalRedirectError extends Error {
  target: string;

  constructor(message: string, target: string) {
    super(message);
    this.target = target;
  }
}

export function makeInternalRedirect(target: string): InternalRedirectError {
  const message = `Internal redirect - Location: ${target}`;
  return new InternalRedirectError(message, target);
}
