export default function getRequestBody({id}, variables) {
  return JSON.stringify({id, variables});
}
