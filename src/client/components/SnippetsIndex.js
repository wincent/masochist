/**
 * @flow
 */

import PropTypes from 'prop-types';
import React from 'react';
import {createPaginationContainer, graphql} from 'react-relay';
import {getRefetchToken} from '../RefetchTokenManager';
import Snippet from './Snippet';
import LoadMoreButton from './LoadMoreButton';

import type {Disposable, RelayPaginationProp} from 'react-relay';
import type {SnippetsIndex as SnippetsIndexData} from './__generated__/SnippetsIndex.graphql';

type Props = {
  data: SnippetsIndexData,
  relay: RelayPaginationProp,
};
type State = {
  isLoading: boolean,
};

const PAGE_SIZE = 3;

// See note in `ArticlesIndex`.
let fragmentVariables;

class SnippetsIndex extends React.Component<Props, State> {
  _disposable: ?Disposable;

  static contextTypes = {
    router: PropTypes.object,
  };

  constructor(props: Props) {
    super(props);
    this.state = {isLoading: false};
  }

  _handleLoadMore = () => {
    this.setState({isLoading: true}, () => {
      this._disposable = this.props.relay.loadMore(PAGE_SIZE, error => {
        this.setState({isLoading: this.props.relay.isLoading()});
        this._disposable = null;

        // TODO: DRY up this pattern, now in a few places
        const route = window.location.pathname;
        this.context.router.history.replace(route, {
          refetchToken: getRefetchToken(),
          variables: fragmentVariables,
        });
      });
    });
  };

  componentWillUnmount() {
    if (this._disposable) {
      this._disposable.dispose();
      this._disposable = null;
    }
  }

  render() {
    const edges = this.props.data.snippets.edges;
    return (
      <div>
        {edges &&
          edges.map(edge => {
            const node = edge && edge.node;
            if (node) {
              return <Snippet key={node.id} data={node} />;
            }
          })}
        {this.props.data.snippets.pageInfo.hasNextPage ? (
          <LoadMoreButton
            isLoading={this.state.isLoading}
            onLoadMore={this._handleLoadMore}
          />
        ) : null}
      </div>
    );
  }
}

const SnippetsIndexContainer = createPaginationContainer(
  SnippetsIndex,
  graphql`
    fragment SnippetsIndex on Root {
      snippets(first: $count, after: $cursor)
        @connection(key: "SnippetsIndex_snippets") {
        edges {
          node {
            id
            ...Snippet
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  `,
  {
    getFragmentVariables(prevVars, totalCount) {
      fragmentVariables = {
        ...prevVars,
        count: totalCount,
      };
      return fragmentVariables;
    },
    getVariables(props, {count, cursor}, fragmentVariables) {
      return {
        baseHeadingLevel: 2,
        count,
        cursor,
      };
    },
    query: graphql`
      query SnippetsIndexQuery(
        $baseHeadingLevel: Int!
        $count: Int!
        $cursor: String
      ) {
        ...SnippetsIndex
      }
    `,
  },
);

SnippetsIndexContainer.PAGE_SIZE = PAGE_SIZE;

export default SnippetsIndexContainer;
