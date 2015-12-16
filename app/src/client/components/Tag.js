import React from 'react';
import Relay from 'react-relay';
import ifMounted from '../ifMounted';
import ContentListing from './ContentListing';
import ContentPreview from './ContentPreview';
import DocumentTitle from './DocumentTitle';
import LoadMoreButton from './LoadMoreButton';
import Link from './Link';
import PluralText from './PluralText';

class Tag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: false};
  }

  _handleLoadMore = () => {
    this.props.relay.setVariables({
      count: this.props.relay.variables.count + 10,
    }, ifMounted(this, ({ready, done, error, aborted}) => {
      this.setState({isLoading: !ready && !(done || error || aborted)});
    }));
  }

  componentDidMount() {
    ifMounted.register(this);
  }

  componentWillUnmount() {
    ifMounted.unregister(this);
  }

  render() {
    const {tag} = this.props;
    const {taggables} = tag;
    return (
      <DocumentTitle title={tag.name}>
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
          <ContentListing>
            {
              taggables.edges.map(({cursor, node}, i) => (
                <ContentPreview cursor={cursor} key={i} node={node} />
              ))
            }
          </ContentListing>
          {
            taggables.pageInfo.hasNextPage ?
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
