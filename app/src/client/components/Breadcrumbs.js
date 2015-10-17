/**
 * @flow
 */

import React from 'react';
import Relay from 'react-relay';
import {Link} from 'react-router';

import './Breadcrumbs.css';

function flatten(array: Array<mixed>): Array<mixed> {
  return array.reduce((result, item) => result.concat(item), []);
}

class Breadcrumbs extends React.Component {
  render() {
    const {node, routes} = this.props;

    let leaf;
    switch (node.__typename) {
      case 'Article':
        leaf = <ArticleCrumb article={node.article} />;
        break;
      case 'Post':
        leaf = <PostCrumb post={node.post} />;
        break;
      case 'Snippet':
        leaf = <SnippetCrumb snippet={node.snippet} />;
        break;
    }

    const paths = routes.map(route => route.path).filter(path => path);
    const crumbs = paths.map(path => {
      let crumb;
      if (path === '/') {
        if (paths.length === 1) {
          return [
            <Link to="/">Home</Link>,
            <span>Blog</span>,
          ];
        } else {
          return <Link to="/">Home</Link>;
        }
      } else if (path === 'blog') {
        return <span>Blog</span>;
      } else if (path === 'blog/:id') {
        return [
          <Link to="/blog">Blog</Link>,
          leaf,
        ];
      } else if (path === 'pages/:id') {
        return [
          <Link to="/pages">Pages</Link>,
          leaf,
        ];
      } else if (path === 'snippets') {
        return <span>Snippets</span>;
      } else if (path === 'snippets/:id') {
        return [
          <Link to="/snippets">Snippets</Link>,
          leaf,
        ];
      } else if (path === 'wiki') {
        return <span>Wiki</span>;
      } else if (path === 'wiki/:id') {
        return [
          <Link to="/wiki">Wiki</Link>,
          leaf,
        ];
      }
    });
    return (
      <ul className="breadcrumbs">
        {
          flatten(crumbs).map((crumb, index) => (
            <li key={index}>{crumb}</li>
          ))
        }
      </ul>
    );
  }
}

const ArticleCrumb = Relay.createContainer(
  ({article}) => <span>{article.title}</span>,
  {
    fragments: {
      article: () => Relay.QL`fragment on Article { title }`,
    },
  }
);

const PostCrumb = Relay.createContainer(
  ({post}) => <span>{post.title}</span>,
  {
    fragments: {
      post: () => Relay.QL`fragment on Post { title }`,
    },
  }
);

const SnippetCrumb = Relay.createContainer(
  ({snippet}) => (
    <span>{snippet.title || `Snippet #${snippet.id}`}</span>
  ),
  {
    fragments: {
      snippet: () => Relay.QL`
        fragment on Snippet {
          id
          title
        }
      `,
    },
  }
);

// TODO: Page support
export default Relay.createContainer(Breadcrumbs, {
  fragments: {
    node: () => Relay.QL`
      fragment on Node {
        __typename
        ${ArticleCrumb.getFragment('article')}
        ${PostCrumb.getFragment('post')}
        ${SnippetCrumb.getFragment('snippet')}
      }
    `,
  },
});
