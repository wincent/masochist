/**
 * @noflow
 */

export default function formatTitle(title: ?string): string {
  return [...(title ? [title] : []), 'wincent.com'].join(' · ');
}
