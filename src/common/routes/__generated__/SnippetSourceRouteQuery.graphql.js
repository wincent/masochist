/**
 * @flow
 * @relayHash 926e6fa7c402ba4565dbec8a2aaaf9a5
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type MARKUP_FORMAT_TYPE = "C" | "HTML" | "M" | "MD" | "PATCH" | "RB" | "SH" | "TXT" | "%future added value";
export type SnippetSourceRouteQueryVariables = {|
  format?: ?MARKUP_FORMAT_TYPE,
  id: string,
|};
export type SnippetSourceRouteQueryResponse = {|
  +node: ?{|
    +source?: ?string
  |}
|};
export type SnippetSourceRouteQuery = {|
  variables: SnippetSourceRouteQueryVariables,
  response: SnippetSourceRouteQueryResponse,
|};
*/


/*
query SnippetSourceRouteQuery(
  $format: MARKUP_FORMAT_TYPE
  $id: ID!
) {
  node(id: $id) {
    __typename
    ... on Snippet {
      source(format: $format)
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "format",
    "type": "MARKUP_FORMAT_TYPE",
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
  "kind": "InlineFragment",
  "type": "Snippet",
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "source",
      "args": [
        {
          "kind": "Variable",
          "name": "format",
          "variableName": "format",
          "type": "MARKUP_FORMAT_TYPE"
        }
      ],
      "storageKey": null
    }
  ]
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "SnippetSourceRouteQuery",
  "id": "SnippetSourceRouteQuery",
  "text": null,
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "SnippetSourceRouteQuery",
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
          v2
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "SnippetSourceRouteQuery",
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
          v2
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'eafb4479f75afbf0a082df476596408b';
module.exports = node;
