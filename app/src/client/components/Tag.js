import React from 'react';
import {createPaginationContainer, graphql} from 'react-relay';
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
      this.props.relay.loadMore(10, error => {
        this.setState({isLoading: this.props.relay.isLoading()});
        // ifMounted(this, error => {
        //   this.setState({isLoading: this.props.relay.isLoading()});
        // });
      });
    });
  };

  componentDidMount() {
    ifMounted.register(this);
  }

  componentWillUnmount() {
    ifMounted.unregister(this);
  }

  render() {
    const tag = this.props.data;
    const {count, name, taggables, url} = tag;
    // this is the url that needs encoding
    return (
      <DocumentTitle title={name}>
        <div>
          <h1>
            <Link to={url}>
              {name}
            </Link>
          </h1>
          <p>
            <PluralText count={count} text="item" /> tagged
            with <em>{name}</em>
          </p>
          <ContentListing>
            {taggables.edges.map(({cursor, node}, i) => (
              <ContentPreview cursor={cursor} key={i} data={node} />
            ))}
          </ContentListing>
          {taggables.pageInfo.hasNextPage
            ? <LoadMoreButton
                isLoading={this.state.isLoading}
                onLoadMore={this._handleLoadMore}
              />
            : null}
        </div>
      </DocumentTitle>
    );
  }
}

export default createPaginationContainer(
  Tag,
  graphql`
    fragment Tag on Tag {
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
            ...ContentPreview
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  `,
  {
    getFragmentVariables(prevVars, totalCount) {
      return {
        ...prevVars,
        count: totalCount,
      };
    },
    getVariables({data: {id}}, {count, cursor}, fragmentVariables) {
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
          ...Tag
        }
      }
    `,
  },
);
