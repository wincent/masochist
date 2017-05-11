import React from 'react';
import {createPaginationContainer, graphql} from 'react-relay';
import DocumentTitle from './DocumentTitle';
import LoadMoreButton from './LoadMoreButton';
import Post from './Post';

const PAGE_SIZE = 3;

class PostsIndex extends React.Component {
  // TODO: DRY up this pagination pattern
  constructor(props) {
    super(props);
    this.state = {isLoading: false};
  }

  _handleLoadMore = () => {
    this.setState({isLoading: true}, () => {
      this._disposable = this.props.relay.loadMore(
      PAGE_SIZE, error => {
        this.setState({isLoading: this.props.relay.isLoading()});
        this._disposable = null;
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
    return (
      <DocumentTitle title="blog">
        <div>
          {this.props.data.posts.edges.map(({node}) => (
            <Post key={node.id} data={node} />
          ))}
          {this.props.data.posts.pageInfo.hasNextPage
            ? <LoadMoreButton
                isLoading={this.state.isLoading}
                onLoadMore={this._handleLoadMore}
              />
            : null}
        </div>
      </DocumentTitle>
    );
  }
}

const PostsIndexContainer = createPaginationContainer(
  PostsIndex,
  graphql`
    fragment PostsIndex on Root {
      posts(
        first: $count
        after: $cursor
      ) @connection(key: "PostsIndex_posts") {
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
      return {
        ...prevVars,
        count: totalCount,
      };
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
