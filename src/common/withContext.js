/**
 * @noflow
 */
import PropTypes from 'prop-types';
import React from 'react';

/**
 * Renders `component` with `context` available as `this.context`.
 */
export default function withContext(context, component) {
  class ContextProvider extends React.Component {
    static childContextTypes = Object.keys(context).reduce((acc, key) => {
      acc[key] = PropTypes.any.isRequired;
      return acc;
    }, {});

    getChildContext() {
      return context;
    }

    render() {
      return this.props.children;
    }
  }

  return <ContextProvider>{component}</ContextProvider>;
}
