import React from 'react';
import Relay from 'react-relay';
import TagPreview from './TagPreview';
import LoadMoreButton from './LoadMoreButton';

class TagCloud extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: false};
  }

  _handleLoadMore = () => {
    this.props.relay.setVariables({
      count: this.props.relay.variables.count + 100,
    }, ({ready, done, error, aborted}) => {
      this.setState({isLoading: !ready && !(done || error || aborted)});
    });
  }

  render() {
    return (
      <div>
        <table className="u-full-width">
          <thead>
            <tr>
              <th>Tag</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.viewer.tags.edges.map(({node}) => (
                <TagPreview key={node.id} tag={node} />
              ))
            }
          </tbody>
        </table>
        {
          this.props.viewer.tags.pageInfo.hasNextPage ?
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

export default Relay.createContainer(TagCloud, {
  initialVariables: {
    count: 100,
  },
  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        tags(first: $count) {
          edges {
            node {
              id
              ${TagPreview.getFragment('tag')}
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
