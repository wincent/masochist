/**
 * @flow
 */

/**
 * Perform error subclassing song and dance
 * (http://stackoverflow.com/a/17891099/2103996).
 */
export default function createErrorClass(
  name: string,
  getProperties: (...args: any) => {message: string, [string]: mixed},
) {
  const errorClass = function() {
    const {message, ...props} = getProperties.apply(this, arguments);
    const error = (Error: any).call(this, message);
    error.name = this.name = name;
    this.message = error.message;
    Object.entries(props).forEach(([key, value]) => {
      props[key] = {value};
    });
    Object.defineProperties(
      this,
      ({
        ...props,
        stack: {
          configurable: true,
          get() {
            // Use a getter here because computing the stack is
            // expensive; do it lazily only when accessed.
            return error.stack;
          },
        },
      }: any),
    );
  };

  errorClass.prototype = Object.create(Error.prototype, {
    constructor: {
      configurable: true,
      value: errorClass,
      writable: true,
    },
  });

  return errorClass;
}
