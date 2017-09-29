import inBrowser from '../client/inBrowser';
import formatTitle from './formatTitle';
import withContext from './withContext';

export default function buildRoute(query, config) {
  return async function action({api, params}) {
    const {environment} = api;
    const variables =
      typeof config.variables === 'function'
        ? config.variables(params)
        : config.variables;
    const data = await api.fetchQuery(query, variables);
    const title =
      (typeof config.title === 'function'
        ? config.title(data, params)
        : config.title) || '';
    const description = config.description ? config.description(data) : null;

    if (inBrowser) {
      document.title = formatTitle(title);
    }

    const relay = {
      environment,
      variables,
    };
    return {
      component: withContext({relay}, config.render(data, params)),
      description,
      title,
    };
  };
}
