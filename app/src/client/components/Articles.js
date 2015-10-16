import React from 'react';
import Relay from 'react-relay';
import ArticlePreview from './ArticlePreview';
import LoadMoreButton from './LoadMoreButton';

class Articles extends React.Component {
  _handleLoadMore = () => {
    this.props.relay.setVariables({
      count: this.props.relay.variables.count + 10,
    });
  }

  render() {
    return (
      <div>
        <h1>Wiki articles</h1>
        <table className="u-full-width">
          <thead>
            <tr>
              <th>Title</th>
              <th>About</th>
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
            <LoadMoreButton onLoadMore={this._handleLoadMore} /> :
            null
        }
      </div>
    );
  }
}

export default Relay.createContainer(Articles, {
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
