/**
 * @flow strict
 */

export default function formatTitle(title: ?string): string {
  // flowlint-next-line sketchy-null:off
  return [...(title ? [title] : []), 'wincent.com'].join(' · ');
}
