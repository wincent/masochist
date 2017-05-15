import {readFile} from 'fs';

const renderers = {};

export default function renderCompiledPug(filePath, options, callback) {
  if (renderers[filePath]) {
    return callback(null, renderers[filePath](options));
  }

  readFile(filePath, (error, content) => {
    if (error) {
      return callback(error);
    }
    const render = new Function(
      'locals',
      content.toString() + '\n' + 'return template(locals);',
    );
    renderers[filePath] = render;
    callback(null, render(options));
  });
}
