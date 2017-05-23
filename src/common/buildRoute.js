import RenderTextError from './RenderTextError';
import withContext from './withContext';

export default function buildRoute(
  query,
  getVariables,
  render,
  getDescription,
) {
  return async function action({api, params}) {
    const {environment} = api;
    const variables = getVariables(params);
    const data = await api.fetchQuery(query, variables);
    const description = getDescription ? getDescription(data) : null;
    const relay = {
      environment,
      variables,
    };
    const rendered = render(data, params);
    if (typeof rendered === 'string') {
      throw new RenderTextError(rendered);
    }
    return {
      component: withContext({relay}, rendered),
      description,
    };
  };
}
