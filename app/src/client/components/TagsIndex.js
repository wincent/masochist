import React from 'react';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import DocumentTitle from './DocumentTitle';
import TagPreview from './TagPreview';

class TagsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {filterString: ''};
  }

  render() {
    const {tags} = this.props.viewer;
    const filteredTags =
      tags.edges.map(({node}) => node).filter(node => {
        const filters = this.state.filterString.trim().split(/\s+/);
        return filters === [] || filters.every(filter => (
          node.name.indexOf(filter) !== -1
        ));
      });
    return (
      <DocumentTitle title="tags">
        <div>
          <h1>Tags</h1>
          <label htmlFor="tag-filter-input">Filter tags</label>
          <input
            className="u-full-width"
            id="tag-filter-input"
            onChange={(event) => this.setState({
              filterString: event.currentTarget.value,
            })}
            placeholder="Tags..."
            type="text"
            value={this.state.filterString}
          />
          <p>
            {
              filteredTags.length === tags.edges.length ?
                `Showing ${filteredTags.length} tags.` :
                `Showing ${filteredTags.length} of ${tags.edges.length} tags.`
            }
          </p>
          <table className="u-full-width">
            <thead>
              <tr>
                <th>Tag</th>
                <th>Count</th>
              </tr>
            </thead>
            <tbody>
              {
                filteredTags.map(node => (
                  <TagPreview key={node.id} tag={node} />
                ))
              }
            </tbody>
          </table>
        </div>
      </DocumentTitle>
    );
  }
}

export default createFragmentContainer(TagsIndex, {
  viewer: graphql`
    fragment TagsIndex_viewer on User {
      tags(first: $count) {
        count
        edges {
          node {
            id
            name
            ...TagPreview_tag
          }
        }
      }
    }
  `,
});
