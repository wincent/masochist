/**
 * @flow
 */

import PropTypes from 'prop-types';
import React from 'react';
import matchRoute from '../../common/matchRoute';

import type {Node as ReactNode} from 'react';
import type {MasochistRouter} from '../../common/createRouter';

const RouterLink = ({to, children, ...props}, context) => {};

type Props = {
  to: string,
  historyTo?: string,
  children: ReactNode,
  title?: ?string,
};

/**
 * Router-aware link component.
 */
const Link = (
  {to, historyTo, children, ...props}: Props,
  context: {router: MasochistRouter},
) => (
  <a
    href={to}
    onClick={event => {
      if (event.ctrlKey || event.metaKey) {
        // User holding a modifier; let the browser handle it.
        return;
      }
      if (matchRoute(to)) {
        event.preventDefault();
        context.router.history.push(historyTo || to);
      }
    }}
    {...props}
  >
    {children}
  </a>
);

Link.contextTypes = {router: PropTypes.object};

export default Link;
