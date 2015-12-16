import React from 'react';
import Relay from 'react-relay';
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
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false, // Pagination.
      isSearching: false, // Initial search.
      q: props.q || '',
    };
  }

  _handleLoadMore = () => {
    this.props.relay.setVariables({
      count: this.props.relay.variables.count + 10,
    }, this.ifMounted(({ready, done, error, aborted}) => {
      this.setState({isLoading: !ready && !(done || error || aborted)});
    }));
  }

  componentDidMount() {
    this._mounted = true;
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  ifMounted(callback) {
    return function() {
      if (this._mounted) {
        callback.apply(this, arguments);
      }
    }.bind(this);
  }

  render() {
    const {search} = this.props.viewer;
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
                this.props.relay.setVariables({
                  count: INITIAL_COUNT,
                  q: this.state.q,
                }, this.ifMounted(({ready, done, error, aborted}) => {
                  this.props.history.replace(searchURL);
                  this.setState({isSearching: !ready && !(done || error || aborted)});
                }));
              }}
            >
              <input
                className="eight columns"
                id="search-input"
                onChange={event => this.setState({q: event.currentTarget.value})}
                placeholder="Search..."
                type="search"
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

export default Relay.createContainer(Search, {
  initialVariables: {
    count: INITIAL_COUNT,
    q: '',
  },
  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        search(first: $count, q: $q) {
          count
          edges {
            cursor
            node {
              ${ContentPreview.getFragment('node')}
            }
          }
          pageInfo {
            hasNextPage
          }
        }
      }
    `,
  },
});
