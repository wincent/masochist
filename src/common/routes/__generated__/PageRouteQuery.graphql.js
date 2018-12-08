/**
 * @flow
 * @relayHash bc8f9ef9b3f21a175600bdc7cf809473
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Page$ref = any;
export type PageRouteQueryVariables = {|
  baseHeadingLevel: number,
  id: string,
|};
export type PageRouteQueryResponse = {|
  +node: ?{|
    +description?: ?string,
    +title?: ?string,
    +$fragmentRefs: Page$ref,
  |}
|};
export type PageRouteQuery = {|
  variables: PageRouteQueryVariables,
  response: PageRouteQueryResponse,
|};
*/


/*
query PageRouteQuery(
  $baseHeadingLevel: Int!
  $id: ID!
) {
  node(id: $id) {
    __typename
    ... on Page {
      ...Page
      description
      title
    }
    id
  }
}

fragment Page on Page {
  id
  title
  url
  body {
    html(baseHeadingLevel: $baseHeadingLevel)
  }
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
  "name": "PageRouteQuery",
  "id": "PageRouteQuery",
  "text": null,
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "PageRouteQuery",
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
            "type": "Page",
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "Page",
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
    "name": "PageRouteQuery",
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
            "type": "Page",
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
(node/*: any*/).hash = 'c2e0a5ac020844a4c748a5070bc211ae';
module.exports = node;
