export default function extractTypeAndId(typeAndId) {
  const separatorIndex = typeAndId.indexOf(':');
  return [
    typeAndId.substr(0, separatorIndex),
    typeAndId.slice(separatorIndex + 1),
  ];
}
