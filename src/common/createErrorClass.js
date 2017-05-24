/**
 * @flow
 */

/**
 * Perform error subclassing song and dance
 *
 * See:
 *
 * - http://www.2ality.com/2011/12/subtyping-builtins.html
 * - https://coderwall.com/p/m3-cqw/subclassing-error-in-javascript-is-harder-than-it-seems
 * - http://stackoverflow.com/a/17891099/2103996
 *
 */
export default function createErrorClass(
  name: string,
  getProperties: (...args: any) => {message: string, [string]: mixed},
) {
  function ErrorClass() {
    const {message, ...properties} = getProperties.apply(this, arguments);
    const error = Error(message);
    error.name = this.name = name;
    this.message = error.message;
    Object.entries(properties).forEach(([key, value]) => {
      Object.defineProperty(this, key, {value});
    });
    Object.defineProperty(
      this,
      'stack',
      // Explicitly annotate as Object here to work around:
      // https://github.com/facebook/flow/issues/285
      ({
        configurable: true,
        get() {
          // Use a getter here because computing the stack is expensive;
          // do it lazily only when accessed.
          return error.stack;
        },
      }: Object),
    );
  }

  ErrorClass.prototype = Object.create(Error.prototype, {
    constructor: {
      configurable: true,
      value: ErrorClass,
      writable: true,
    },
  });

  return ErrorClass;
}
