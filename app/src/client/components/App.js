import React from 'react';
import Relay from 'react-relay';
import Wikitext from './Wikitext';

import './App.css';

class App extends React.Component {
  _handleSeeMore = event => {
    event.preventDefault();
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
              const {id, title, createdAt, updatedAt, tags, body} = edge.node;
              return (
                <li key={id}>
                  <h2>
                    <a href={'/wiki/' + title.replace(/ /g, '_')}>
                      {title}
                    </a>
                  </h2>
                  <Wikitext html={body.html} />
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
    count: 3,
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
              body {
                html
              }
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
