import React from 'react';
import {
  createPaginationContainer,
  graphql,
} from 'react-relay';
import ifMounted from '../ifMounted';
import DocumentTitle from './DocumentTitle';
import LoadMoreButton from './LoadMoreButton';
import Post from './Post';

class PostsIndex extends React.Component {
  // TODO: DRY up this pagination pattern
  constructor(props) {
    super(props);
    this.state = {isLoading: false};
  }

  _handleLoadMore = () => {
    this.setState({isLoading: true}, () => {
      this.props.relay.loadMore(
        3,
        error => {
          this.setState({isLoading: this.props.relay.isLoading()});
          // ifMounted(this, error => {
          //   this.setState({isLoading: this.props.relay.isLoading()});
          // });
        },
      );
    });
  }

  componentDidMount() {
    ifMounted.register(this);
  }

  componentWillUnmount() {
    ifMounted.unregister(this);
  }

  render() {
    return (
      <DocumentTitle title="blog">
        <div>
          {
            this.props.data.posts.edges.map(({node}) => (
              <Post key={node.id} post={node} />
            ))
          }
          {
            this.props.data.posts.pageInfo.hasNextPage ?
              <LoadMoreButton
                isLoading={this.state.isLoading}
                onLoadMore={this._handleLoadMore}
              /> :
              null
          }
        </div>
      </DocumentTitle>
    );
  }
}

export default createPaginationContainer(
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
            ...Post_post
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
    `
  }
);
