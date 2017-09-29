import inBrowser from '../client/inBrowser';
import withContext from './withContext';

export default function buildRoute(
  query,
  getVariables,
  render,
  getTitle,
  getDescription,
) {
  return async function action({api, params}) {
    const {environment} = api;
    const variables =
      typeof getVariables === 'function' ? getVariables(params) : getVariables;
    const data = await api.fetchQuery(query, variables);
    const title =
      (typeof getTitle === 'function' ? getTitle(data, params) : getTitle) ||
      '';
    const description = getDescription ? getDescription(data) : null;

    if (inBrowser) {
      document.title = [title, 'wincent.com'].join(' · ');
    }

    const relay = {
      environment,
      variables,
    };
    return {
      component: withContext({relay}, render(data, params)),
      description,
      title,
    };
  };
}
