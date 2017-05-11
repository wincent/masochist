import React from 'react';
import {createPaginationContainer, graphql} from 'react-relay';
import ifMounted from '../ifMounted';
import DocumentTitle from './DocumentTitle';
import Snippet from './Snippet';
import LoadMoreButton from './LoadMoreButton';

class SnippetsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: false};
  }

  _handleLoadMore = () => {
    this.setState({isLoading: true}, () => {
      this.props.relay.loadMore(10, error => {
        this.setState({isLoading: this.props.relay.isLoading()});
        // ifMounted(this, error => {
        //   this.setState({isLoading: this.props.relay.isLoading()});
        // });
      });
    });
  };

  componentDidMount() {
    ifMounted.register(this);
  }

  componentWillUnmount() {
    ifMounted.unregister(this);
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

export default createPaginationContainer(
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
