/**
 * @noflow
 */

export default function extractTypeAndId(typeAndId: string): [string, string] {
  const separatorIndex = typeAndId.indexOf(':');
  return [
    typeAndId.substr(0, separatorIndex),
    typeAndId.slice(separatorIndex + 1),
  ];
}
