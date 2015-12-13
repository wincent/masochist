import React from 'react';
import Relay from 'react-relay';
import ArticlePreview from './ArticlePreview';
import PagePreview from './PagePreview';
import PostPreview from './PostPreview';
import SnippetPreview from './SnippetPreview';

class ContentPreview extends React.Component {
  render() {
    const {cursor, node} = this.props;
    switch (node.__typename) {
      case 'Article':
        return <ArticlePreview article={node} key={cursor} />;
      case 'Page':
        return <PagePreview key={cursor} page={node} />;
      case 'Post':
        return <PostPreview key={cursor} post={node} />;
      case 'Snippet':
        return <SnippetPreview key={cursor} snippet={node} />;
    }
  }
}

export default Relay.createContainer(ContentPreview, {
  fragments: {
    node: () => Relay.QL`
      fragment on Content {
        __typename
        ${ArticlePreview.getFragment('article')}
        ${PagePreview.getFragment('page')}
        ${PostPreview.getFragment('post')}
        ${SnippetPreview.getFragment('snippet')}
      }
    `,
  },
});
