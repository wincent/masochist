export default function formatTitle(title) {
  return [...(title ? [title] : []), 'typechecked.net'].join(' · ');
}
