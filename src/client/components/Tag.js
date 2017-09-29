/**
 * @flow
 */

import React from 'react';
import {createPaginationContainer, graphql} from 'react-relay';
import ContentListing from './ContentListing';
import ContentPreview from './ContentPreview';
import LoadMoreButton from './LoadMoreButton';
import Link from './Link';
import PluralText from './PluralText';

import type {Disposable, RelayPaginationProp} from 'react-relay';
import type {Tag as TagData} from './__generated__/Tag.graphql';

const PAGE_SIZE = 10;

class Tag extends React.Component {
  props: {
    data: TagData,
    relay: RelayPaginationProp,
  };
  state: {
    isLoading: boolean,
  };
  _disposable: ?Disposable;

  constructor(props) {
    super(props);
    this.state = {isLoading: false};
  }

  _handleLoadMore = () => {
    this.setState({isLoading: true}, () => {
      this._disposable = this.props.relay.loadMore(PAGE_SIZE, error => {
        this.setState({isLoading: this.props.relay.isLoading()});
        this._disposable = null;
      });
    });
  };

  componentWillUnmount() {
    if (this._disposable) {
      this._disposable.dispose();
      this._disposable = null;
    }
  }

  render() {
    const tag = this.props.data;
    const {count, name, taggables, url} = tag;
    const {edges} = taggables;
    // this is the url that needs encoding
    return (
      <div>
        <h1>
          <Link to={url}>{name}</Link>
        </h1>
        <p>
          <PluralText count={count} text="item" /> tagged with <em>{name}</em>
        </p>
        <ContentListing>
          {edges &&
            edges.map((edge, i) => {
              if (edge) {
                const {cursor, node} = edge;
                return <ContentPreview cursor={cursor} key={i} data={node} />;
              }
            })}
        </ContentListing>
        {taggables.pageInfo.hasNextPage ? (
          <LoadMoreButton
            isLoading={this.state.isLoading}
            onLoadMore={this._handleLoadMore}
          />
        ) : null}
      </div>
    );
  }
}

const TagContainer = createPaginationContainer(
  Tag,
  graphql`
    fragment Tag on Tag {
      count
      id
      name
      url
      taggables(first: $count, after: $cursor)
        @connection(key: "Tag_taggables") {
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
      query TagQuery($count: Int!, $cursor: String, $id: ID!) {
        node(id: $id) {
          ...Tag
        }
      }
    `,
  },
);

TagContainer.PAGE_SIZE = PAGE_SIZE;

export default TagContainer;
