import React from 'react';
import {
  createPaginationContainer,
  graphql,
} from 'react-relay';
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
    this.setState({isLoading: true}, () => {
      this.props.relay.loadMore(
        10,
        error => {
          this.setState({isLoading: this.props.relay.isLoading()});
          // ifMounted(this, error => {
          //   this.setState({isLoading: this.props.relay.isLoading()});
          // });
        },
      );
    });
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
    // this is the url that needs encoding
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

export default createPaginationContainer(
  Tag,
  {
    tag: graphql`
      fragment Tag_tag on Tag {
        count
        id
        name
        url
        taggables(
          first: $count
          after: $cursor
        ) @connection(key: "Tag_taggables") {
          edges {
            cursor
            node {
              ...ContentPreview_node
            }
          }
          pageInfo {
            endCursor
            hasNextPage
          }
        }
      }
    `,
  },
  {
    getFragmentVariables(prevVars, totalCount) {
      return {
        ...prevVars,
        count: totalCount,
      };
    },
    getVariables({tag: {id}}, {count, cursor}, fragmentVariables) {
      return {
        id,
        count,
        cursor,
      };
    },
    query: graphql`
      query TagQuery(
        $count: Int!
        $cursor: String
        $id: ID!
      ) {
        node(id: $id) {
          ...Tag_tag
        }
      }
    `
  }
);
