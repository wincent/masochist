import React from 'react';
import Relay from 'react-relay';
import TagPreview from './TagPreview';

class TagCloud extends React.Component {
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
    );
  }
}

export default Relay.createContainer(TagCloud, {
  initialVariables: {
    count: Number.MAX_SAFE_INTEGER
  },
  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        tags(first: $count) {
          count
          edges {
            node {
              id
              name
              ${TagPreview.getFragment('tag')}
            }
          }
        }
      }
    `,
  },
});
