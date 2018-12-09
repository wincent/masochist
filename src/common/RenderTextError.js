/**
 * @flow strict
 */

export default class RenderTextError extends Error {
  text: string;
  type: string;

  constructor(text: string, type: string) {
    super('RenderTextError');
    this.text = text;
    this.type = type;
  }
}

export function makeRenderText(text: string, type: string): RenderTextError {
  return new RenderTextError(text, type);
}
