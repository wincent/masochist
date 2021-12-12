/**
 *  strict
 */

export default function formatTitle(title) {
  // flowlint-next-line sketchy-null:off
  return [...(title ? [title] : []), 'wincent.com'].join(' · ');
}
