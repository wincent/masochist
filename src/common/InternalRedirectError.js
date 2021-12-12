/**
 *  strict
 */

export default class InternalRedirectError extends Error {
  target;

  constructor(message, target) {
    super(message);
    this.target = target;
  }
}

export function makeInternalRedirect(target) {
  const message = `Internal redirect - Location: ${target}`;
  return new InternalRedirectError(message, target);
}
