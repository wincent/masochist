/**
 * @flow
 */

import raw from '../raw';
import template from '../template';

export default function renderError(locals) {
  const {
    error,
    message,
    pageContent,
    styles,
  } = locals;
  return template`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        ${
          styles.then(s => s ? template`<style>${raw(s)}</style>` : null)
        }
        <link rel="icon" type="image/x-icon" href="favicon.ico">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>${error} ${message} · wincent.com</title>
      </head>
      <body>
        <div id="root">${pageContent}</div>
  `;
}
