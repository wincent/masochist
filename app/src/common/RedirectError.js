/**
 * @flow
 */

function descriptionForCode(code: number): string {
  switch (code) {
    case 301:
      return 'Moved Permanently';
    case 302:
      return 'Found';
    default:
      throw new Error(`Unsupported status code ${code}`);
  }
}

function RedirectError(target: string, code: number) {
  // Standard error subclassing song and dance
  // (http://stackoverflow.com/a/17891099/2103996).
  const message = `HTTP/1.1 ${code} ${descriptionForCode(code)} - Location: ${target}`;
  const error = (Error: any).call(this, message);
  error.name = this.name = 'RedirectError';
  this.message = error.message;
  Object.defineProperties(
    this,
    ({
      code: {
        value: code,
      },
      stack: {
        configurable: true,
        get() {
          // Use a getter here because computing the stack is expensive; do it
          // lazily only when accessed.
          return error.stack;
        },
      },
      target: {
        value: target,
      },
    }: any),
  );
}

RedirectError.prototype = Object.create(Error.prototype, {
  constructor: {
    configurable: true,
    value: RedirectError,
    writable: true,
  },
});

export default RedirectError;
