export default class NotFoundError extends Error {
  constructor(message, component) {
    super(message);
    this.component = component;
  }
}

export function makeNotFound(message, component) {
  return new NotFoundError(message, component);
}
