export default function formatTitle(title) {
  return [...(title ? [title] : []), 'wincent.dev'].join(' · ');
}
