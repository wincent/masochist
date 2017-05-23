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
  // Using `new Function` as a slightly less ugly `eval`, so that the error name
  // gets correctly logged in the console.
  //
  // Due to use of babel-polyfill (and therefore core-js), no need to polyfill
  // `Object.create`, `Object.defineProperty` etc.
  return new Function('getProperties', `
    function ${name}() {
      var properties =  getProperties.apply(this, arguments);
      var error = Error.call(this, properties.message);
      error.name = this.name = '${name}';
      this.message = error.message;
      Object.entries(properties).forEach(function(pair) {
        var key = pair[0];
        var value = pair[1];
        if (key !== 'message') {
          Object.defineProperty(
            this,
            key,
            {
              value: value
            }
          );
        }
      }, this);
      Object.defineProperty(
        this,
        'stack',
        {
          configurable: true,
          get: function() {
            // Use a getter here because computing the stack is expensive;
            // do it lazily only when accessed.
            return error.stack;
          }
        }
      );
    }

    ${name}.prototype = Object.create(Error.prototype, {
      constructor: {
        configurable: true,
        value: ${name},
        writable: true
      },
    });

    return ${name};
  `)(getProperties);
}
