/**
 * @noflow
 */

export function array(maybeArray: mixed): Array<*> {
  if (Array.isArray(maybeArray)) {
    return maybeArray;
  }
  throw new Error('Expected array');
}

export function number(maybeNumber: mixed): number {
  if (typeof maybeNumber === 'number') {
    return maybeNumber;
  }
  throw new Error('Expected number'); // TODO: add "got" message
}

export function object(maybeObject: mixed): Object {
  if (maybeObject && typeof maybeObject === 'object') {
    return maybeObject;
  }
  throw new Error('Expected object');
}

export function string(maybeString: mixed): string {
  if (typeof maybeString === 'string') {
    return maybeString;
  }
  throw new Error('Expected string');
}
