/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Tags$ref = any;
type When$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Article$ref: FragmentReference;
export type Article = {|
  +title: ?string,
  +redirect: ?string,
  +resolvedTitle: ?string,
  +editURL: string,
  +url: string,
  +body: {|
    +html: string
  |},
  +$fragmentRefs: Tags$ref & When$ref,
  +$refType: Article$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "Article",
  "type": "Article",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "baseHeadingLevel",
      "type": "Int"
    }
  ],
  "selections": [
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
      "name": "redirect",
      "args": null,
      "storageKey": null
    },
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
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "url",
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
    {
      "kind": "FragmentSpread",
      "name": "Tags",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "When",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'efe468bd4fb17dba34ac63638c11c782';
module.exports = node;
