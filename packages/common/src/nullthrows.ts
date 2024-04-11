/**
 * Non-null assert function (alternative to TypeScript's `!` non-null assertion
 * operator).
 *
 * Comparison between the two methods:
 *
 * - `!` _may_ cause the program to crash if the assertion is wrong and a
 *   subsequent instruction attempts to use the value in a wall that is not
 *   null-safe (for example, accessing a property on it).
 * - `nullthrows()` _will_ immediately crash the program if the assertion is
 *   wrong.
 * - `!` has no runtime cost.
 * - `nullthrows()` has a small runtime cost.
 * - `!` may produce an inscrutable error, depending on when/if subsequent
 *   non-null-safe access takes place.
 * - `nullthrows()` produces a clear error.
 * - `!` produces errors where the last frame in the stacktrace shows where the
 *   invalid access occurred.
 * - `nullthrows()` produces errors where the last frame in the stacktrace shows
 *   where the assertion failed.
 * - `!` may be flagged by a lint rule against casts and assertions.
 * - `nullthrows()` won't be flagged by a lint rule against casts and
 *   assertions.
 * - `!` is a step outside of the type system's guarantees; it allows the
 *   programmer to tell the TypeScript compiler "trust me, I know what I'm doing".
 * - `nullthrows()` remains within the type system's guarantees; it asks the JS
 *   runtime to tell the programmer "you didn't, in fact, know what you were
 *   doing".
 *
 * Overall, my recommendation is to use `!` when the risk of programmer error is
 * small (ie. when the distance between the basis for making the assertion and
 * the assertion itself is small), and use `nullthrows()` when the basis is more
 * subtle, or more dispersed. Addiitonally, if the code can be cleanly
 * refactored to dispense with either kind of assertion, then that's desirable.
 *
 * Example - simple assertion based on immediate prior check (use `!`):
 *
 *      if (!queue.empty) {
 *        // We literally just confirmed that the queue is not empty, so it is
 *        // safe to assume that when we dequeue something we'll actually get an
 *        // item:
 *        processItem(queue.dequeue()!);
 *      }
 *
 *      // Note, however, that the operator _could_ be avoided by rewriting the
 *      // conditional in this case:
 *      const item = queue.dequeue();
 *      if (item) {
 *        processItem(item);
 *      }
 *
 * Example - subtle assertion based on chain of causality (use `nullthrows()`):
 *
 *      send(message: string) {
 *        // Caller isn't supposed to call us unless the socket is in a valid
 *        // state.
 *        nullthrows(this._socket).write(message);
 *      }
 *
 *      // Here, again, if you think caller mistakes are likely, you may want to
 *      // implement explicit error-handling instead. If you're the caller, then
 *      // you have the option of improving your code so as to make that mistake
 *      // less likely, but if you're writing a library to be accessed by
 *      // unknown/future callers, then the explicit error-handling will be
 *      // better:
 *      send(message: string) {
 *        if (!this._socket) {
 *          throw new Error('send(): no valid socket');
 *        }
 *        this._socket.write(message);
 *      }
 *
 * Note: This implementation not use TypeScript's assertion function syntax
 * (`asserts value is NonNullable<T>`) because we want this function to be a
 * passthrough (like `!` is) as opposed to returning a boolean.
 */

export default function nullthrows<T>(value: T): NonNullable<T> {
  if (value == null) {
    throw new Error('nullthrows(): Unexpected null-ish value');
  }
  return value;
}
