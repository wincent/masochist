/**
 * @flow
 * @relayHash dd7a2668c204944f49e9d0c9e15d400c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Tag$ref = any;
export type TagQueryVariables = {|
  count: number,
  cursor?: ?string,
  id: string,
|};
export type TagQueryResponse = {|
  +node: ?{|
    +$fragmentRefs: Tag$ref
  |}
|};
export type TagQuery = {|
  variables: TagQueryVariables,
  response: TagQueryResponse,
|};
*/


/*
query TagQuery(
  $count: Int!
  $cursor: String
  $id: ID!
) {
  node(id: $id) {
    __typename
    ...Tag
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
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "url",
  "args": null,
  "storageKey": null
},
v5 = [
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
v6 = [
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
  v4,
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
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "TagQuery",
  "id": "TagQuery",
  "text": null,
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "TagQuery",
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
            "kind": "FragmentSpread",
            "name": "Tag",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "TagQuery",
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
          v2,
          v3,
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
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "name",
                "args": null,
                "storageKey": null
              },
              v4,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "taggables",
                "storageKey": null,
                "args": v5,
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
                          v2,
                          v3,
                          {
                            "kind": "InlineFragment",
                            "type": "Article",
                            "selections": v6
                          },
                          {
                            "kind": "InlineFragment",
                            "type": "Page",
                            "selections": v6
                          },
                          {
                            "kind": "InlineFragment",
                            "type": "Post",
                            "selections": v6
                          },
                          {
                            "kind": "InlineFragment",
                            "type": "Snippet",
                            "selections": v6
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
                "args": v5,
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
(node/*: any*/).hash = 'd38d03a144aad7be04daf62c1ad803ec';
module.exports = node;
