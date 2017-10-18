/**
 * @noflow
 */

import PropTypes from 'prop-types';
import React from 'react';
import {createPaginationContainer, graphql} from 'react-relay';
import inBrowser from '../../common/inBrowser';
import {getRefetchToken} from '../RefetchTokenManager';
import ArticlePreview from './ArticlePreview';
import LoadMoreButton from './LoadMoreButton';

import type {Disposable, RelayPaginationProp} from 'react-relay';
import type {ArticlesIndex as ArticlesIndexData} from './__generated__/ArticlesIndex.graphql';

if (inBrowser) {
  require('./ArticlesIndex.css');
}

const PAGE_SIZE = 10;

// `getFragmentVariables` is called without context (no `this`), and Relay
// doesn't expose fragment variables to components. Our component can
// sneakily observe them though via this variable. This is safe because there is
// only ever one mounted ArticlesIndex instance.
let fragmentVariables;

class ArticlesIndex extends React.Component {
  props: {
    data: ArticlesIndexData,
    relay: RelayPaginationProp,
  };
  state: {
    isLoading: boolean,
  };
  _disposable: ?Disposable;

  static contextTypes = {
    router: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {isLoading: false};
  }

  _handleLoadMore = () => {
    this.setState({isLoading: true}, () => {
      this._disposable = this.props.relay.loadMore(PAGE_SIZE, error => {
        this.setState({isLoading: this.props.relay.isLoading()});
        this._disposable = null;

        // At this point we can "see" the new fragmentVariables.
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
      fragmentVariables = {
        ...prevVars,
        count: totalCount,
      };
      return fragmentVariables;
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
