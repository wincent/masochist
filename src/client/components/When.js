/**
 * @flow
 */

import React from 'react';
import {createFragmentContainer, graphql} from 'react-relay';
import Time from './Time';
import inBrowser from '../inBrowser';
import relativizeDate from '../relativizeDate';

import type {When as WhenData} from './__generated__/When.graphql';

if (inBrowser) {
  require('./When.css');
}

const WhenWrapper = ({children, url}) => (
  <div className="when">
    <a className="when-link" href={url}>
      {children}
    </a>
  </div>
);

class When extends React.Component {
  props: {
    data: WhenData,
  };

  render() {
    const {createdAt, history: {url}, updatedAt} = this.props.data;
    if (
      relativizeDate(createdAt).humanReadable ===
      relativizeDate(updatedAt).humanReadable
    ) {
      return (
        <WhenWrapper url={url}>
          <Time datetime={updatedAt} />
        </WhenWrapper>
      );
    }

    return (
      <WhenWrapper url={url}>
        Created <Time datetime={createdAt} />, updated{' '}
        <Time datetime={updatedAt} />
      </WhenWrapper>
    );
  }
}

export default createFragmentContainer(
  When,
  graphql`
    fragment When on Versioned {
      createdAt
      history {
        url
      }
      updatedAt
    }
  `,
);
