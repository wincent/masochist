/**
 * @flow
 * @relayHash f30d60b6312eeafccb88ddfea6ca4019
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Search$ref = any;
export type SearchRouteQueryVariables = {|
  count: number,
  cursor?: ?string,
  q: string,
|};
export type SearchRouteQueryResponse = {|
  +$fragmentRefs: Search$ref
|};
export type SearchRouteQuery = {|
  variables: SearchRouteQueryVariables,
  response: SearchRouteQueryResponse,
|};
*/


/*
query SearchRouteQuery(
  $count: Int!
  $cursor: String
  $q: String!
) {
  ...Search
}

fragment Search on Root {
  search(first: $count, after: $cursor, q: $q) {
    count
    edges {
      cursor
      node {
        ...ContentPreview
        ... on Node {
          id
        }
        __typename
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment ContentPreview on Content {
  __typename
  ...ArticlePreview
  ...PagePreview
  ...PostPreview
  ...SnippetPreview
}

fragment ArticlePreview on Article {
  description
  title
  url
  ...Tags
  ...When
}

fragment PagePreview on Page {
  description
  title
  url
  ...Tags
  ...When
}

fragment PostPreview on Post {
  description
  title
  url
  ...Tags
  ...When
}

fragment SnippetPreview on Snippet {
  description
  title
  url
  ...Tags
  ...When
}

fragment Tags on Tagged {
  tags
}

fragment When on Versioned {
  createdAt
  history {
    url
  }
  updatedAt
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "count",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "cursor",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "q",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor",
    "type": "String"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count",
    "type": "Int"
  },
  {
    "kind": "Variable",
    "name": "q",
    "variableName": "q",
    "type": "String"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "url",
  "args": null,
  "storageKey": null
},
v3 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "description",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "title",
    "args": null,
    "storageKey": null
  },
  v2,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "tags",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "createdAt",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "history",
    "storageKey": null,
    "args": null,
    "concreteType": "History",
    "plural": false,
    "selections": [
      v2
    ]
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "updatedAt",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "SearchRouteQuery",
  "id": "SearchRouteQuery",
  "text": null,
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "SearchRouteQuery",
    "type": "Root",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "Search",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "SearchRouteQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "search",
        "storageKey": null,
        "args": v1,
        "concreteType": "SearchResultConnection",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "count",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "SearchResultEdge",
            "plural": true,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "cursor",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": null,
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "__typename",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "id",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "type": "Article",
                    "selections": v3
                  },
                  {
                    "kind": "InlineFragment",
                    "type": "Page",
                    "selections": v3
                  },
                  {
                    "kind": "InlineFragment",
                    "type": "Post",
                    "selections": v3
                  },
                  {
                    "kind": "InlineFragment",
                    "type": "Snippet",
                    "selections": v3
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "pageInfo",
            "storageKey": null,
            "args": null,
            "concreteType": "PageInfo",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "endCursor",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "hasNextPage",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "search",
        "args": v1,
        "handle": "connection",
        "key": "Search_search",
        "filters": [
          "q"
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2585487d4c726a2c38eb6bfb0d5f672a';
module.exports = node;
