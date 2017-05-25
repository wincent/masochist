/**
 * Like react-document-title, but produces nested titles: Foo · Bar · Baz
 *
 * @see https://github.com/gaearon/react-document-title/blob/master/index.js
 * @flow
 */

import PropTypes from 'prop-types';
import React from 'react';
import withSideEffect from 'react-side-effect';

function reducePropsToState(propsList) {
  const leaves = [];
  const other = [];
  propsList.forEach(({isLeaf, title}) => {
    if (isLeaf) {
      leaves.push(title);
    } else if (leaves.length) {
      throw new Error('Found non-leaf component after a leaf component');
    } else {
      other.push(title);
    }
  });

  // If there were multiple leaves, we must be in some kind of index component,
  // so we won't show any of the leaves; otherwise, we show the sole leaf.
  if (leaves.length === 1) {
    other.push(...leaves);
  }

  return other.reverse().join(' · ');
}

function handleStateChangeOnClient(newState) {
  // TODO: consider batching, seeing as we're getting called multiple times
  document.title = newState || '';
}

class DocumentTitle extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,

    /**
     * A component should specify `isLeaf` if it is a "leaf node" like an
     * Article or a Post which may appear as a permalink, or within a list of
     * other leaves. This property is used to detect and handle the index case,
     * where a naive approach would end up appending the titles from every
     * single leaf.
     */
    isLeaf: PropTypes.bool,
  };

  render() {
    return React.Children.only(this.props.children);
  }
}

export default withSideEffect(reducePropsToState, handleStateChangeOnClient)(
  DocumentTitle,
);
