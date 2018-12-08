/**
 * @flow
 * @relayHash 9f49a342abe0063f2329fe497dc4b461
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Post$ref = any;
export type PostRouteQueryVariables = {|
  baseHeadingLevel: number,
  id: string,
|};
export type PostRouteQueryResponse = {|
  +node: ?{|
    +description?: ?string,
    +title?: ?string,
    +$fragmentRefs: Post$ref,
  |}
|};
export type PostRouteQuery = {|
  variables: PostRouteQueryVariables,
  response: PostRouteQueryResponse,
|};
*/


/*
query PostRouteQuery(
  $baseHeadingLevel: Int!
  $id: ID!
) {
  node(id: $id) {
    __typename
    ... on Post {
      ...Post
      description
      title
    }
    id
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
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id",
    "type": "ID!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "url",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "PostRouteQuery",
  "id": "PostRouteQuery",
  "text": null,
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "PostRouteQuery",
    "type": "Root",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": v1,
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "type": "Post",
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "Post",
                "args": null
              },
              v2,
              v3
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "PostRouteQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": v1,
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
            "type": "Post",
            "selections": [
              v3,
              v4,
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
                  v4
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "updatedAt",
                "args": null,
                "storageKey": null
              },
              v2
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4dbf81ae2b8a5555f507863010ab5696';
module.exports = node;
