/**
 * @flow
 * @relayHash 3c0a18d077cf152bb1e3e0fe94c852bf
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Tag$ref = any;
export type TagRouteQueryVariables = {|
  count: number,
  cursor?: ?string,
  id: string,
|};
export type TagRouteQueryResponse = {|
  +node: ?{|
    +name?: any,
    +$fragmentRefs: Tag$ref,
  |}
|};
export type TagRouteQuery = {|
  variables: TagRouteQueryVariables,
  response: TagRouteQueryResponse,
|};
*/


/*
query TagRouteQuery(
  $count: Int!
  $cursor: String
  $id: ID!
) {
  node(id: $id) {
    __typename
    ... on Tag {
      ...Tag
      name
    }
    id
  }
}

fragment Tag on Tag {
  count
  id
  name
  url
  taggables(first: $count, after: $cursor) {
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
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "url",
  "args": null,
  "storageKey": null
},
v6 = [
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
v7 = [
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
  v5,
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
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "TagRouteQuery",
  "id": "TagRouteQuery",
  "text": null,
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "TagRouteQuery",
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
            "type": "Tag",
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "Tag",
                "args": null
              },
              v2
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "TagRouteQuery",
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
          v3,
          v4,
          {
            "kind": "InlineFragment",
            "type": "Tag",
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "count",
                "args": null,
                "storageKey": null
              },
              v2,
              v5,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "taggables",
                "storageKey": null,
                "args": v6,
                "concreteType": "TaggableConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "TaggableEdge",
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
                          v3,
                          v4,
                          {
                            "kind": "InlineFragment",
                            "type": "Article",
                            "selections": v7
                          },
                          {
                            "kind": "InlineFragment",
                            "type": "Page",
                            "selections": v7
                          },
                          {
                            "kind": "InlineFragment",
                            "type": "Post",
                            "selections": v7
                          },
                          {
                            "kind": "InlineFragment",
                            "type": "Snippet",
                            "selections": v7
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
                "name": "taggables",
                "args": v6,
                "handle": "connection",
                "key": "Tag_taggables",
                "filters": null
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3f77e60519ca3c349d484485d2037931';
module.exports = node;
