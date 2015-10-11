import React from 'react';
import Relay from 'react-relay';
import PrerenderedMarkup from './PrerenderedMarkup';
import When from './When';

class Article extends React.Component {
  render() {
    const {article} = this.props;
    // TODO handle redirects
    return (
      <div>
        <h1>{article.title}</h1>
        <When createdAt={article.createdAt} updatedAt={article.updatedAt} />
        <div>
          <PrerenderedMarkup html={this.props.article.body.html} />
        </div>
      </div>
    );
    // TODO tags
  }
}

export default Relay.createContainer(Article, {
  initialVariables: {
    baseHeadingLevel: 2,
  },
  fragments: {
    article: () => Relay.QL`
      fragment on Article {
        id
        title
        createdAt
        updatedAt
        tags
        body {
          html(baseHeadingLevel: $baseHeadingLevel)
        }
      }
    `,
  },
});
