import React from 'react';
import {createPaginationContainer, graphql} from 'react-relay';
import inBrowser from '../inBrowser';
import ifMounted from '../ifMounted';
import ArticlePreview from './ArticlePreview';
import DocumentTitle from './DocumentTitle';
import LoadMoreButton from './LoadMoreButton';

if (inBrowser) {
  require('./ArticlesIndex.css');
}

class ArticlesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: false};
  }

  _handleLoadMore = () => {
    this.setState({isLoading: true}, () => {
      this.props.relay.loadMore(10, error => {
        // TODO: confirm this crazy ifMounted stuff is still needed
        this.setState({isLoading: this.props.relay.isLoading()});
        // ifMounted(this, (error) => {
        //   // not called
        //   console.log('setting state', this.props.relay.isLoading());
        //   // this.setState({isLoading: this.props.relay.isLoading()})
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
      <DocumentTitle title="wiki">
        <div>
          <h1>Wiki articles</h1>
          <table className="article-listing u-full-width">
            <thead>
              <tr>
                <th>What</th>
                <th>Title</th>
                <th>When</th>
                <th>Tags</th>
              </tr>
            </thead>
            <tbody>
              {this.props.data.articles.edges.map(({node}) => (
                <ArticlePreview key={node.id} data={node} />
              ))}
            </tbody>
          </table>
          {this.props.relay.hasMore()
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
  ArticlesIndex,
  graphql`
    fragment ArticlesIndex on Root {
      articles(
        first: $count
        after: $cursor
      ) @connection(key: "ArticlesIndex_articles") {
        edges {
          node {
            id
            ...ArticlePreview
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
        count,
        cursor,
      };
    },
    query: graphql`
      query ArticlesIndexQuery(
        $count: Int!
        $cursor: String
      ) {
        ...ArticlesIndex
      }
    `,
  },
);
