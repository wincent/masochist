/**
 * @flow strict
 */

export default class ExternalRedirectError extends Error {
  constructor(message: string, target: string, code: number) {
    super(message);
    this.target = target;
    this.code = code;
  }
}

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

export function makeExternalRedirect(target: string, code: number): ExternalRedirectError {
  const message = `HTTP/1.1 ${code} ${descriptionForCode(
    code,
  )} - Location: ${target}`;
  return new ExternalRedirectError(message, target, code);
}
