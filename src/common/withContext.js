import PropTypes from 'prop-types';
import React from 'react';

/**
 * Renders `component` with `context` available as `this.context`.
 */
export default function withContext(context, component) {
  class ContextProvider extends React.Component {
    static childContextTypes = {};

    getChildContext() {
      return context;
    }

    render() {
      return this.props.children;
    }
  }

  Object.keys(context).forEach(key => {
    ContextProvider.childContextTypes[key] = PropTypes.any.isRequired;
  });

  return <ContextProvider>{component}</ContextProvider>;
}
