/**
 * @flow
 * @relayHash a1cb948f9afa3e9eef5d9a892c0d176f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Snippet$ref = any;
export type SnippetRouteQueryVariables = {|
  baseHeadingLevel: number,
  id: string,
|};
export type SnippetRouteQueryResponse = {|
  +node: ?{|
    +description?: ?string,
    +title?: ?string,
    +$fragmentRefs: Snippet$ref,
  |}
|};
export type SnippetRouteQuery = {|
  variables: SnippetRouteQueryVariables,
  response: SnippetRouteQueryResponse,
|};
*/


/*
query SnippetRouteQuery(
  $baseHeadingLevel: Int!
  $id: ID!
) {
  node(id: $id) {
    __typename
    ... on Snippet {
      ...Snippet
      description
      title
    }
    id
  }
}

fragment Snippet on Snippet {
  body {
    html(baseHeadingLevel: $baseHeadingLevel)
  }
  id
  url
  title
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
  "name": "SnippetRouteQuery",
  "id": "SnippetRouteQuery",
  "text": null,
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "SnippetRouteQuery",
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
            "type": "Snippet",
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "Snippet",
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
    "name": "SnippetRouteQuery",
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
            "type": "Snippet",
            "selections": [
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
              v4,
              v3,
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
(node/*: any*/).hash = '4484171c39212112cb511b26ff7b3f77';
module.exports = node;
