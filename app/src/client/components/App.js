import React from 'react';
import Relay from 'react-relay';

import './App.css';

class App extends React.Component {
  // TODO: swap this for autobind decorator
  _handleSeeMore = () => {
    this.props.relay.setVariables({
      count: this.props.relay.variables.count + 10,
    });
  }

  render() {
    return (
      <div>
        <h1>Hi, {this.props.viewer.name}</h1>
        <ul>
          {
            this.props.viewer.articles.edges.map(edge => {
              const {id, title, createdAt, updatedAt, tags} = edge.node;
              return (
                <li key={id}>
                  <a href={'/wiki/' + title.replace(/ /g, '_')}>
                    {title}
                  </a>
                  <ul>
                    {
                      tags.map((tag, i) => (
                        <li key={i}>
                          <a href={'/tags/' + tag}>{tag}</a>
                        </li>
                      ))
                    }
                  </ul>
                </li>
              );
            })
          }
        </ul>
        {
          this.props.viewer.articles.pageInfo.hasNextPage ?
            <a href="#more" onClick={this._handleSeeMore}>Load more&hellip;</a> :
            null
        }
      </div>
    );
  }
}

export default Relay.createContainer(App, {
  initialVariables: {
    count: 10,
  },
  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        name
        articles(first: $count) {
          edges {
            node {
              id
              title
              createdAt
              updatedAt
              tags
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
