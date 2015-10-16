import React from 'react';
import Relay from 'react-relay';
import Article from './Article';
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
        {
          this.props.viewer.articles.edges.map(({node}) => (
            <Article key={node.id} article={node} />
          ))
        }
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
    count: 3,
  },
  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        articles(first: $count) {
          edges {
            node {
              id
              ${Article.getFragment('article')}
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
