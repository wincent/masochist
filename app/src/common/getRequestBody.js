export default function getRequestBody(operation, variables) {
  return JSON.stringify({
    query: operation.text,
    variables,
  });
}
