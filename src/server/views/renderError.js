/**
 * @flow
 */

import formatTitle from '../../common/formatTitle';
import raw from '../raw';
import template from '../template';

export default function renderError(locals: {
  code: number,
  message: string,
  pageContent: string,
  styles: Promise<?string>,
}) {
  const {code, message, pageContent, styles} = locals;
  const title = formatTitle(`${code} ${message}`);
  return template`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        ${styles.then(s => (s ? template`<style>${raw(s)}</style>` : null))}
        <link rel="icon" type="image/x-icon" href="/favicon.ico">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>${title}</title>
      </head>
      <body>
        <div id="root">${pageContent}</div>
  `;
}
