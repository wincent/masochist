/**
 * @flow
 */

/**
 * Returns a canonical URL for the response, or null if there is not one.
 */
export default function getCanonicalURLForRequest(request): ?string {
  // We only look at path, ignoring query string params.
  const path = request.path;
  let canonical;

  // Warning: beautiful code ahead!</irony>
  if (path === '/') {
    canonical = '/blog';
  } else if (path === '/blog' || path === '/blog/') {
    canonical = '/blog';
  } else if (path.match(/^\/blog\/.+/)) {
    canonical = path;
  } else if (path.match(/^\/pages\/.+/)) {
    canonical = path;
  } else if (path === '/snippets' || path === '/snippets/') {
    canonical = '/snippets';
  } else if (path.match(/^\/snippets\/.+/)) {
    canonical = path;
  } else if (path === '/wiki' || path === '/wiki/') {
    canonical = '/wiki';
  } else if (path.match(/^\/wiki\/.+/)) {
    canonical = path;
  }

  if (canonical) {
    // Nothing dynamic; hardcode everything, trust nobody.
    return 'https://wincent.com' + canonical;
  }

  return null;
}
