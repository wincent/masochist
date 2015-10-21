import React from 'react';
import Relay from 'react-relay';
import {Link} from 'react-router';
import ArticlePreview from './ArticlePreview';
import LoadMoreButton from './LoadMoreButton';
import PluralText from './PluralText';
import PagePreview from './PagePreview';
import PostPreview from './PostPreview';
import SnippetPreview from './SnippetPreview';

class Tag extends React.Component {
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
    const {tag} = this.props;
    const {taggables} = tag;
    return (
      <div>
        <h1>
          <Link to={tag.url}>
            {tag.name}
          </Link>
        </h1>
        <p>
          <PluralText count={tag.count} text="item" /> tagged
          with <em>{tag.name}</em>
        </p>
        <table className="u-full-width">
          <thead>
            <tr>
              <th>Title</th>
              <th>About</th>
            </tr>
          </thead>
          <tbody>
            {
              taggables.edges.map(({cursor, node}) => {
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
              })
            }
          </tbody>
        </table>
        {
          taggables.pageInfo.hasNextPage ?
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

export default Relay.createContainer(Tag, {
  initialVariables: {
    count: 10,
  },
  fragments: {
    tag: () => Relay.QL`
      fragment on Tag {
        count
        name
        url
        taggables(first: $count) {
          edges {
            cursor
            node {
              __typename
              ${ArticlePreview.getFragment('article')}
              ${PagePreview.getFragment('page')}
              ${PostPreview.getFragment('post')}
              ${SnippetPreview.getFragment('snippet')}
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
