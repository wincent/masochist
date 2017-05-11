import withContext from './withContext';

export default function buildRoute(query, getVariables, render) {
  return async function action({api, params}) {
    const {environment} = api;
    const variables = getVariables(params);
    const data = await api.fetchQuery(query, variables);
    const relay = {
      environment,
      variables,
    };
    return {
      component: withContext({relay}, render(data, params)),
    };
  };
}
