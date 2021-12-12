export default function formatTitle(title) {
  return [...(title ? [title] : []), 'wincent.com'].join(' · ');
}
