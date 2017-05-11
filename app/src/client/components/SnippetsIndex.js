import React from 'react';
import {createPaginationContainer, graphql} from 'react-relay';
import DocumentTitle from './DocumentTitle';
import Snippet from './Snippet';
import LoadMoreButton from './LoadMoreButton';

const PAGE_SIZE = 3;

class SnippetsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: false};
  }

  _handleLoadMore = () => {
    this.setState({isLoading: true}, () => {
      this._disposable = this.props.relay.loadMore(PAGE_SIZE, error => {
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
      <DocumentTitle title="snippets">
        <div>
          {this.props.data.snippets.edges.map(({node}) => (
            <Snippet key={node.id} data={node} />
          ))}
          {this.props.data.snippets.pageInfo.hasNextPage
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

const SnippetsIndexContainer = createPaginationContainer(
  SnippetsIndex,
  graphql`
    fragment SnippetsIndex on Root {
      snippets(
        first: $count
        after: $cursor
      ) @connection(key: "SnippetsIndex_snippets") {
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
