/**
 * @flow
 * @relayHash 690cf80bbc6e3d2ac8d16143bf492b08
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Article$ref = any;
export type ArticleRouteQueryVariables = {|
  baseHeadingLevel: number,
  id: string,
|};
export type ArticleRouteQueryResponse = {|
  +node: ?{|
    +description?: ?string,
    +redirect?: ?string,
    +title?: ?string,
    +$fragmentRefs: Article$ref,
  |}
|};
export type ArticleRouteQuery = {|
  variables: ArticleRouteQueryVariables,
  response: ArticleRouteQueryResponse,
|};
*/


/*
query ArticleRouteQuery(
  $baseHeadingLevel: Int!
  $id: ID!
) {
  node(id: $id) {
    __typename
    ... on Article {
      ...Article
      description
      redirect
      title
    }
    id
  }
}

fragment Article on Article {
  title
  redirect
  resolvedTitle
  editURL
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
  "name": "redirect",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "url",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "ArticleRouteQuery",
  "id": "ArticleRouteQuery",
  "text": null,
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ArticleRouteQuery",
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
            "type": "Article",
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "Article",
                "args": null
              },
              v2,
              v3,
              v4
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ArticleRouteQuery",
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
            "type": "Article",
            "selections": [
              v4,
              v3,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "resolvedTitle",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "editURL",
                "args": null,
                "storageKey": null
              },
              v5,
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
                  v5
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
(node/*: any*/).hash = 'f9a04448792f59834f6d99e89841fe2d';
module.exports = node;
