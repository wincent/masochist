import PropTypes from 'prop-types';
import React from 'react';
import {
  createPaginationContainer,
  graphql,
} from 'react-relay';
import ifMounted from '../ifMounted';
import ArticlePreview from './ArticlePreview';
import ContentListing from './ContentListing';
import ContentPreview from './ContentPreview';
import DocumentTitle from './DocumentTitle';
import LoadMoreButton from './LoadMoreButton';
import Link from './Link';
import PluralText from './PluralText';
import PagePreview from './PagePreview';
import PostPreview from './PostPreview';
import SnippetPreview from './SnippetPreview';

const INITIAL_COUNT = 10;

class Search extends React.Component {
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
      this.props.relay.loadMore(
        10,
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
    this._searchInput.focus();
  }

  componentWillUnmount() {
    ifMounted.unregister(this);
    this._searchInput = null;
  }

  render() {
    const {search} = this.props.data;
    let searchURL = '/search';
    if (this.state.q.trim()) {
      searchURL += '/' + encodeURIComponent(this.state.q.trim());
    }
    return (
      <DocumentTitle title="search">
        <div>
          <h1>
            <Link to={searchURL}>
              {this.state.q || 'Search'}
            </Link>
          </h1>
          <div className="row">
            <form
              onSubmit={event => {
                event.preventDefault();
                this.context.router.history.push(searchURL);
              }}
            >
              <input
                className="eight columns"
                id="search-input"
                onChange={event => this.setState({q: event.currentTarget.value})}
                placeholder="Search..."
                type="search"
                ref={input => { this._searchInput = input }}
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
            {
              search.edges.map(({cursor, node}, i) => (
                <ContentPreview cursor={cursor} key={i} node={node} />
              ))
            }
          </ContentListing>
          {
            search.pageInfo.hasNextPage ?
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
  Search,
  graphql`
    fragment Search on Root {
      search(
        first: $count
        after: $cursor
        q: $q
      ) @connection(key: "Search_search") {
        count
        edges {
          cursor
          node {
            ...ContentPreview_node
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
      query SearchQuery(
        $count: Int!
        $cursor: String
        $q: String!
      ) {
        ...Search
      }
    `
  }
);
