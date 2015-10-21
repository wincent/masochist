import React from 'react';
import Relay from 'react-relay';
import ArticlePreview from './ArticlePreview';
import LoadMoreButton from './LoadMoreButton';

import './ArticlesIndex.css';

class ArticlesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: false};
  }

  _handleLoadMore = () => {
    this.props.relay.setVariables({
      count: this.props.relay.variables.count + 10,
    }, ({ready, done, error, aborted}) => {
      this.setState({isLoading: !ready && !(done || error || aborted)});
    });
  }

  render() {
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
            {
              this.props.viewer.articles.edges.map(({node}) => (
                <ArticlePreview key={node.id} article={node} />
              ))
            }
          </tbody>
        </table>
        {
          this.props.viewer.articles.pageInfo.hasNextPage ?
            <LoadMoreButton
              isLoading={this.state.isLoading}
              onLoadMore={this._handleLoadMore}
            /> :
            null
        }
      </div>
    );
  }
}

export default Relay.createContainer(ArticlesIndex, {
  initialVariables: {
    count: 10,
  },
  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        articles(first: $count) {
          edges {
            node {
              id
              ${ArticlePreview.getFragment('article')}
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
