import React from 'react';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
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

export default createFragmentContainer(ContentPreview, {
  node: graphql`
    fragment ContentPreview_node on Content {
      __typename
      ...ArticlePreview_article
      ...PagePreview_page
      ...PostPreview_post
      ...SnippetPreview_snippet
    }
  `,
});
