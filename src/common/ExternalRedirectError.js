export default class ExternalRedirectError extends Error {
  constructor(message, target, code) {
    super(message);
    this.target = target;
    this.code = code;
  }
}

function descriptionForCode(code) {
  switch (code) {
    case 301:
      return 'Moved Permanently';
    case 302:
      return 'Found';
    default:
      throw new Error(`Unsupported status code ${code}`);
  }
}

export function makeExternalRedirect(target, code) {
  const message = `HTTP/1.1 ${code} ${descriptionForCode(
    code,
  )} - Location: ${target}`;
  return new ExternalRedirectError(message, target, code);
}
