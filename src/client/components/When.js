/**
 * @flow
 */

import React from 'react';
import {createFragmentContainer, graphql} from 'react-relay';
import inBrowser from '../../common/inBrowser';
import relativizeDate from '../relativizeDate';
import Time from './Time';

import type {When as WhenData} from './__generated__/When.graphql';

if (inBrowser) {
  require('./When.css');
}

const WhenWrapper = ({children, url}) => (
  <span className="when">
    <a className="when-link" href={url}>
      {children}
    </a>
  </span>
);

class When extends React.Component<{data: WhenData}> {
  render() {
    const {
      createdAt,
      history: {url},
      updatedAt,
    } = this.props.data;

    if (!createdAt || !updatedAt) {
      // Extremely unlikely but, you know, GraphQL.
      return null;
    }

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
        Created <Time datetime={createdAt} />
        {', updated '}
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
