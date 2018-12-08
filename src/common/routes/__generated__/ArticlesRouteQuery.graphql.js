/**
 * @flow
 * @relayHash da16eae761c5b1054df96f3315ea1b60
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ArticlesIndex$ref = any;
export type ArticlesRouteQueryVariables = {|
  count: number,
  cursor?: ?string,
|};
export type ArticlesRouteQueryResponse = {|
  +$fragmentRefs: ArticlesIndex$ref
|};
export type ArticlesRouteQuery = {|
  variables: ArticlesRouteQueryVariables,
  response: ArticlesRouteQueryResponse,
|};
*/


/*
query ArticlesRouteQuery(
  $count: Int!
  $cursor: String
) {
  ...ArticlesIndex
}

fragment ArticlesIndex on Root {
  articles(first: $count, after: $cursor) {
    edges {
      node {
        id
        ...ArticlePreview
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

fragment ArticlePreview on Article {
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
  "name": "ArticlesRouteQuery",
  "id": "ArticlesRouteQuery",
  "text": null,
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ArticlesRouteQuery",
    "type": "Root",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "ArticlesIndex",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ArticlesRouteQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "articles",
        "storageKey": null,
        "args": v1,
        "concreteType": "ArticleConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "ArticleEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Article",
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
        "name": "articles",
        "args": v1,
        "handle": "connection",
        "key": "ArticlesIndex_articles",
        "filters": null
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd1482b4c41508f0d5c36380a4f9272ec';
module.exports = node;
