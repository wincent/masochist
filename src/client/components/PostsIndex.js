/**
 * @noflow
 */

import PropTypes from 'prop-types';
import React from 'react';
import {createPaginationContainer, graphql} from 'react-relay';
import {getRefetchToken} from '../RefetchTokenManager';
import LoadMoreButton from './LoadMoreButton';
import Post from './Post';

import type {Disposable, RelayPaginationProp} from 'react-relay';
import type {PostsIndex as PostsIndexData} from './__generated__/PostsIndex.graphql';

const PAGE_SIZE = 3;

// See note in `ArticlesIndex`.
let fragmentVariables;

class PostsIndex extends React.Component {
  props: {
    data: PostsIndexData,
    relay: RelayPaginationProp,
  };
  state: {
    isLoading: boolean,
  };
  _disposable: ?Disposable;

  static contextTypes = {
    router: PropTypes.object,
  };

  // TODO: DRY up this pagination pattern
  constructor(props) {
    super(props);
    this.state = {isLoading: false};
  }

  _handleLoadMore = () => {
    this.setState({isLoading: true}, () => {
      this._disposable = this.props.relay.loadMore(PAGE_SIZE, error => {
        this.setState({isLoading: this.props.relay.isLoading()});
        this._disposable = null;

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
    const edges = this.props.data.posts.edges;
    return (
      <div>
        {edges &&
          edges.map(edge => {
            const node = edge && edge.node;
            if (node) {
              return <Post key={node.id} data={node} />;
            }
          })}
        {this.props.data.posts.pageInfo.hasNextPage ? (
          <LoadMoreButton
            isLoading={this.state.isLoading}
            onLoadMore={this._handleLoadMore}
          />
        ) : null}
      </div>
    );
  }
}

const PostsIndexContainer = createPaginationContainer(
  PostsIndex,
  graphql`
    fragment PostsIndex on Root {
      posts(first: $count, after: $cursor)
        @connection(key: "PostsIndex_posts") {
        edges {
          node {
            id
            ...Post
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
      query PostsIndexQuery(
        $baseHeadingLevel: Int!
        $count: Int!
        $cursor: String
      ) {
        ...PostsIndex
      }
    `,
  },
);

PostsIndexContainer.PAGE_SIZE = PAGE_SIZE;

export default PostsIndexContainer;
