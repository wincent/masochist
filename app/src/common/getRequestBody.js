export default function getRequestBody(operation, variables) {
  return JSON.stringify({
    name: operation.name,
    variables,
  });
}
