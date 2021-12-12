export default class RenderTextError extends Error {
  constructor(text, type) {
    super('RenderTextError');
    this.text = text;
    this.type = type;
  }
}

export function makeRenderText(text, type) {
  return new RenderTextError(text, type);
}
