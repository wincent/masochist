/**
 * @flow
 * @relayHash c203664a371f34601da08173ee84a4aa
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PostsIndex$ref = any;
export type PostsRouteQueryVariables = {|
  baseHeadingLevel: number,
  count: number,
  cursor?: ?string,
|};
export type PostsRouteQueryResponse = {|
  +$fragmentRefs: PostsIndex$ref
|};
export type PostsRouteQuery = {|
  variables: PostsRouteQueryVariables,
  response: PostsRouteQueryResponse,
|};
*/


/*
query PostsRouteQuery(
  $baseHeadingLevel: Int!
  $count: Int!
  $cursor: String
) {
  ...PostsIndex
}

fragment PostsIndex on Root {
  posts(first: $count, after: $cursor) {
    edges {
      node {
        id
        ...Post
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment Post on Post {
  id
  title
  url
  body {
    html(baseHeadingLevel: $baseHeadingLevel)
  }
  readTime
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
    "name": "baseHeadingLevel",
    "type": "Int!",
    "defaultValue": null
  },
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
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "url",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "PostsRouteQuery",
  "id": "PostsRouteQuery",
  "text": null,
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "PostsRouteQuery",
    "type": "Root",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "PostsIndex",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "PostsRouteQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "posts",
        "storageKey": null,
        "args": v1,
        "concreteType": "PostConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "PostEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Post",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "id",
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
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "body",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Markup",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "html",
                        "args": [
                          {
                            "kind": "Variable",
                            "name": "baseHeadingLevel",
                            "variableName": "baseHeadingLevel",
                            "type": "Int"
                          }
                        ],
                        "storageKey": null
                      }
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "readTime",
                    "args": null,
                    "storageKey": null
                  },
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
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "__typename",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "cursor",
                "args": null,
                "storageKey": null
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
        "name": "posts",
        "args": v1,
        "handle": "connection",
        "key": "PostsIndex_posts",
        "filters": null
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd2787dea0ce6f160a16648eff7f44f00';
module.exports = node;
