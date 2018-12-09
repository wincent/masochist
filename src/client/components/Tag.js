/**
 * @flow
 */

import PropTypes from 'prop-types';
import React from 'react';
import {createPaginationContainer, graphql} from 'react-relay';
import {getRefetchToken} from '../RefetchTokenManager';
import ContentListing from './ContentListing';
import ContentPreview from './ContentPreview';
import LoadMoreButton from './LoadMoreButton';
import Link from './Link';
import PluralText from './PluralText';

import type {Disposable, RelayPaginationProp} from 'react-relay';
import type {Tag as TagData} from './__generated__/Tag.graphql';

const PAGE_SIZE = 10;

// See note in `ArticlesIndex`.
let fragmentVariables;

type Props = {
  data: TagData,
  relay: RelayPaginationProp,
};
type State = {
  isLoading: boolean,
};

class Tag extends React.Component<Props, State> {
  _disposable: ?Disposable;

  static contextTypes = {
    router: PropTypes.object,
  };

  constructor(props: Props) {
    super(props);
    this.state = {isLoading: false};
  }

  _handleLoadMore = () => {
    this.setState({isLoading: true}, () => {
      this._disposable = this.props.relay.loadMore(PAGE_SIZE, error => {
        this.setState({isLoading: this.props.relay.isLoading()});
        this._disposable = null;

        const route = window.location.pathname;
        this.context.router.history.replace(route, {
          refetchToken: getRefetchToken(),
          variables: fragmentVariables,
        });
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
          {edges
            ? edges.map((edge, i) => {
                if (edge) {
                  const {cursor, node} = edge;
                  return <ContentPreview cursor={cursor} key={i} data={node} />;
                }
                return null;
              })
            : null}
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
      fragmentVariables = {
        ...prevVars,
        count: totalCount,
      };
      return fragmentVariables;
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
