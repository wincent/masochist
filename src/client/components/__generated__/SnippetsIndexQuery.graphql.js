/**
 * @flow
 * @relayHash 213cfd281c682759f78f918dcd5ab767
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type SnippetsIndex$ref = any;
export type SnippetsIndexQueryVariables = {|
  baseHeadingLevel: number,
  count: number,
  cursor?: ?string,
|};
export type SnippetsIndexQueryResponse = {|
  +$fragmentRefs: SnippetsIndex$ref
|};
export type SnippetsIndexQuery = {|
  variables: SnippetsIndexQueryVariables,
  response: SnippetsIndexQueryResponse,
|};
*/


/*
query SnippetsIndexQuery(
  $baseHeadingLevel: Int!
  $count: Int!
  $cursor: String
) {
  ...SnippetsIndex
}

fragment SnippetsIndex on Root {
  snippets(first: $count, after: $cursor) {
    edges {
      node {
        id
        ...Snippet
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
  "name": "SnippetsIndexQuery",
  "id": "SnippetsIndexQuery",
  "text": null,
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "SnippetsIndexQuery",
    "type": "Root",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "SnippetsIndex",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "SnippetsIndexQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "snippets",
        "storageKey": null,
        "args": v1,
        "concreteType": "SnippetConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "SnippetEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Snippet",
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
                  v2,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "title",
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
        "name": "snippets",
        "args": v1,
        "handle": "connection",
        "key": "SnippetsIndex_snippets",
        "filters": null
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1ebd8e63e34163b6d487b53199e4e26b';
module.exports = node;
