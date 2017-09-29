/**
 * @flow
 */

import PropTypes from 'prop-types';
import React from 'react';
import {createPaginationContainer, graphql} from 'react-relay';
import ArticlePreview from './ArticlePreview';
import ContentListing from './ContentListing';
import ContentPreview from './ContentPreview';
import LoadMoreButton from './LoadMoreButton';
import Link from './Link';
import PluralText from './PluralText';
import PagePreview from './PagePreview';
import PostPreview from './PostPreview';
import SnippetPreview from './SnippetPreview';

import type {Disposable, RelayPaginationProp} from 'react-relay';
import type {Search as SearchData} from './__generated__/Search.graphql';

const PAGE_SIZE = 10;

class Search extends React.Component {
  props: {
    data: SearchData,
    relay: RelayPaginationProp,
  };
  state: {
    isLoading: boolean,
    isSearching: boolean,
    q: string,
  };
  _disposable: ?Disposable;
  _searchInput: ?HTMLElement;

  static contextTypes = {
    router: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false, // Pagination.
      isSearching: false, // Initial search.
      q: props.q || '',
    };
  }

  _handleLoadMore = () => {
    this.setState({isLoading: true}, () => {
      this._disposable = this.props.relay.loadMore(PAGE_SIZE, error => {
        this.setState({isLoading: this.props.relay.isLoading()});
        this._disposable = null;
      });
    });
  };

  componentDidMount() {
    this._searchInput && this._searchInput.focus();
  }

  componentWillUnmount() {
    if (this._disposable) {
      this._disposable.dispose();
      this._disposable = null;
    }
    this._searchInput = null;
  }

  render() {
    const {search} = this.props.data;
    const {edges} = search;
    let searchURL = '/search';
    if (this.state.q.trim()) {
      searchURL += '/' + encodeURIComponent(this.state.q.trim());
    }
    return (
      <div>
        <h1>
          <Link to={searchURL}>{this.state.q || 'Search'}</Link>
        </h1>
        <div className="row">
          <form
            onSubmit={event => {
              event.preventDefault();
              this.context.router.history.push(searchURL);
            }}>
            <input
              className="eight columns"
              id="search-input"
              onChange={event => this.setState({q: event.currentTarget.value})}
              placeholder="Search..."
              type="search"
              ref={input => {
                this._searchInput = input;
              }}
              value={this.state.q}
            />
            <input
              className="four columns"
              disabled={this.state.isSearching || !this.state.q.trim()}
              type="submit"
              value={this.state.isSearching ? 'Searching\u2026' : 'Search'}
            />
          </form>
        </div>
        <p>
          <PluralText count={search.count} text="item" /> found
        </p>
        <ContentListing>
          {edges &&
            edges.map((edge, i) => {
              if (edge) {
                const {cursor, node} = edge;
                if (node) {
                  return <ContentPreview cursor={cursor} key={i} data={node} />;
                }
              }
            })}
        </ContentListing>
        {search.pageInfo.hasNextPage ? (
          <LoadMoreButton
            isLoading={this.state.isLoading}
            onLoadMore={this._handleLoadMore}
          />
        ) : null}
      </div>
    );
  }
}

const SearchContainer = createPaginationContainer(
  Search,
  graphql`
    fragment Search on Root {
      search(first: $count, after: $cursor, q: $q)
        @connection(key: "Search_search") {
        count
        edges {
          cursor
          node {
            ...ContentPreview
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
    getVariables(props, {count, cursor}, {q}) {
      return {
        count,
        cursor,
        q: q || '',
      };
    },
    query: graphql`
      query SearchQuery($count: Int!, $cursor: String, $q: String!) {
        ...Search
      }
    `,
  },
);

SearchContainer.PAGE_SIZE = PAGE_SIZE;

export default SearchContainer;
