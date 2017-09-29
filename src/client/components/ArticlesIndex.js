/**
 * @flow
 */

import React from 'react';
import {createPaginationContainer, graphql} from 'react-relay';
import inBrowser from '../inBrowser';
import ArticlePreview from './ArticlePreview';
import LoadMoreButton from './LoadMoreButton';

import type {Disposable, RelayPaginationProp} from 'react-relay';
import type {ArticlesIndex as ArticlesIndexData} from './__generated__/ArticlesIndex.graphql';

if (inBrowser) {
  require('./ArticlesIndex.css');
}

const PAGE_SIZE = 10;

class ArticlesIndex extends React.Component {
  props: {
    data: ArticlesIndexData,
    relay: RelayPaginationProp,
  };
  state: {
    isLoading: boolean,
  };
  _disposable: ?Disposable;

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
    const edges = this.props.data.articles.edges;
    return (
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
            {edges &&
              edges.map(edge => {
                const node = edge && edge.node;
                if (node) {
                  return <ArticlePreview key={node.id} data={node} />;
                }
              })}
          </tbody>
        </table>
        {this.props.relay.hasMore() ? (
          <LoadMoreButton
            isLoading={this.state.isLoading}
            onLoadMore={this._handleLoadMore}
          />
        ) : null}
      </div>
    );
  }
}

const ArticlesIndexContainer = createPaginationContainer(
  ArticlesIndex,
  graphql`
    fragment ArticlesIndex on Root {
      articles(first: $count, after: $cursor)
        @connection(key: "ArticlesIndex_articles") {
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
      query ArticlesIndexQuery($count: Int!, $cursor: String) {
        ...ArticlesIndex
      }
    `,
  },
);

ArticlesIndexContainer.PAGE_SIZE = PAGE_SIZE;

export default ArticlesIndexContainer;
