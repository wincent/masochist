/**
 * @noflow
 */

import React from 'react';
import {createFragmentContainer, graphql} from 'react-relay';
import TagPreview from './TagPreview';

import type {Disposable, RelayPaginationProp} from 'react-relay';
import type {TagsIndex as TagsIndexData} from './__generated__/TagsIndex.graphql';

class TagsIndex extends React.Component {
  props: {
    data: TagsIndexData,
    relay: RelayPaginationProp,
  };
  state: {
    filterString: string,
  };

  constructor(props) {
    super(props);
    this.state = {filterString: ''};
  }

  render() {
    const {tags} = this.props.data;
    const filters = this.state.filterString
      .toLowerCase()
      .trim()
      .split(/\s+/);
    const edges = tags && tags.edges;
    if (!edges) {
      // In practice won't happen, but keep Flow happy.
      return null;
    }
    const filteredTags = edges
      .map(edge => edge && edge.node)
      .filter(node => {
        return (
          filters === [] ||
          filters.every(filter => node && node.name.indexOf(filter) !== -1)
        );
      })
      .filter(Boolean); // For Flow
    return (
      <div>
        <h1>Tags</h1>
        <label htmlFor="tag-filter-input">Filter tags</label>
        <input
          className="u-full-width"
          id="tag-filter-input"
          onChange={event =>
            this.setState({
              filterString: event.currentTarget.value,
            })
          }
          placeholder="Tags..."
          type="text"
          value={this.state.filterString}
        />
        <p>
          {filteredTags.length === edges.length
            ? `Showing ${filteredTags.length} tags.`
            : `Showing ${filteredTags.length} of ${edges.length} tags.`}
        </p>
        <table className="u-full-width">
          <thead>
            <tr>
              <th>Tag</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            {filteredTags.map(node => <TagPreview key={node.id} data={node} />)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default createFragmentContainer(
  TagsIndex,
  graphql`
    fragment TagsIndex on Root {
      tags(first: $count) {
        count
        edges {
          node {
            id
            name
            ...TagPreview
          }
        }
      }
    }
  `,
);
