// @ts-nocheck
/**
 * vim: set nomodifiable : DO NOT EDIT - edit "build.ts", run "make lexer" instead
 *
 * @generated
 */
const ACTIONS = [
  null,
  function ($1) {
    {
      $$ = {
        kind: 'DOCUMENT',
        definitions: $1,
      };
    }
    return $$;
  },
  function ($1) {
    {
      $$ = [$1];
    }
    return $$;
  },
  function ($1, $2) {
    {
      $1.push($2);
      $$ = $1;
    }
    return $$;
  },
  function ($1) {
    {
      $$ = $1;
    }
    return $$;
  },
  function ($1) {
    {
      $$ = $1;
    }
    return $$;
  },
  function ($1) {
    {
      $$ = $1;
    }
    return $$;
  },
  function ($1, $2, $3, $4, $5) {
    {
      $$ = {
        kind: 'OPERATION',
        name: $2,
        directives: $4,
        selections: $5,
        type: $1,
        variables: $3,
      };
    }
    return $$;
  },
  function ($1) {
    {
      $$ = {
        kind: 'OPERATION',
        name: null,
        directives: null,
        selections: $1,
        type: 'QUERY',
        variables: null,
      };
    }
    return $$;
  },
  function ($1) {
    {
      {
        const {contents} = $1;
        if (contents === 'query') {
          $$ = 'QUERY';
        } else if (contents === 'mutation') {
          $$ = 'MUTATION';
        } else if (contents === 'subscription') {
          $$ = 'SUBSCRIPTION';
        } else {
          throw new Error(`Unsupported operation type: ${contents}`);
        }
      }
    }
    return $$;
  },
  function ($1) {
    {
      $$ = $1;
    }
    return $$;
  },
  function () {
    {
      $$ = null;
    }
    return $$;
  },
  function ($1) {
    {
      $$ = $1.contents;
    }
    return $$;
  },
  function () {
    {
      $$ = null;
    }
    return $$;
  },
  function () {
    {
      $$ = null;
    }
    return $$;
  },
  function ($2) {
    {
      $$ = $2;
    }
    return $$;
  },
  function () {
    {
      $$ = null;
    }
    return $$;
  },
  function ($1) {
    {
      $$ = [$1];
    }
    return $$;
  },
  function ($1, $2) {
    {
      $1.push($2);
      $$ = $1;
    }
    return $$;
  },
  function ($1, $3, $4, $5) {
    {
      $$ = {
        kind: 'VARIABLE_DEFINITION',
        defaultValue: $4,
        directives: $5,
        type: $3,
        variable: $1,
      };
    }
    return $$;
  },
  function ($2) {
    {
      $$ = {
        kind: 'VARIABLE',
        name: $2,
      };
    }
    return $$;
  },
  function ($1) {
    {
      $$ = $1;
    }
    return $$;
  },
  function ($1) {
    {
      $$ = $1;
    }
    return $$;
  },
  function ($1) {
    {
      $$ = $1;
    }
    return $$;
  },
  function ($1) {
    {
      $$ = {
        kind: 'NAMED_TYPE',
        name: $1,
      };
    }
    return $$;
  },
  function ($2) {
    {
      $$ = {
        kind: 'LIST_TYPE',
        type: $2,
      };
    }
    return $$;
  },
  function ($1) {
    {
      $$ = {
        kind: 'NON_NULL_TYPE',
        type: $1,
      };
    }
    return $$;
  },
  function ($1) {
    {
      $$ = {
        kind: 'NON_NULL_TYPE',
        type: $1,
      };
    }
    return $$;
  },
  function ($2) {
    {
      $$ = $2;
    }
    return $$;
  },
  function () {
    {
      $$ = null;
    }
    return $$;
  },
  function ($1) {
    {
      $$ = $1;
    }
    return $$;
  },
  function ($1) {
    {
      $$ = $1;
    }
    return $$;
  },
  function ($1) {
    {
      $$ = $1;
    }
    return $$;
  },
  function ($1) {
    {
      $$ = $1;
    }
    return $$;
  },
  function ($1) {
    {
      $$ = $1;
    }
    return $$;
  },
  function ($1) {
    {
      {
        const {contents} = $1;

        // TODO: Distinguish between these tokens in the lexer instead?
        if (/^-?\d+$/.test(contents)) {
          $$ = {kind: 'INT', value: parseInt(contents, 10)};
        } else {
          $$ = {kind: 'FLOAT', value: contents};
        }
      }
    }
    return $$;
  },
  function ($1) {
    {
      {
        const name = $1;
        if (name === 'true') {
          $$ = {kind: 'BOOLEAN', value: true};
        } else if (name === 'false') {
          $$ = {kind: 'BOOLEAN', value: false};
        } else if (name === 'null') {
          $$ = {kind: 'NULL'};
        } else {
          $$ = {kind: 'ENUM', value: name};
        }
      }
    }
    return $$;
  },
  function () {
    {
      $$ = {
        kind: 'LIST_VALUE',
        value: [],
      };
    }
    return $$;
  },
  function ($2) {
    {
      $$ = {
        kind: 'LIST_VALUE',
        value: $2,
      };
    }
    return $$;
  },
  function ($1) {
    {
      $$ = [$1];
    }
    return $$;
  },
  function ($1, $2) {
    {
      $1.push($2);
      $$ = $1;
    }
    return $$;
  },
  function () {
    {
      $$ = {
        kind: 'OBJECT_VALUE',
        fields: [],
      };
    }
    return $$;
  },
  function ($2) {
    {
      $$ = {
        kind: 'OBJECT_VALUE',
        fields: $2,
      };
    }
    return $$;
  },
  function ($1) {
    {
      $$ = [$1];
    }
    return $$;
  },
  function ($1, $2) {
    {
      $1.push($2);
      $$ = $1;
    }
    return $$;
  },
  function ($1, $3) {
    {
      $$ = {
        name: $1,
        value: $3,
      };
    }
    return $$;
  },
  function ($1) {
    {
      $$ = $1;
    }
    return $$;
  },
  function () {
    {
      $$ = null;
    }
    return $$;
  },
  function ($1) {
    {
      $$ = [$1];
    }
    return $$;
  },
  function ($1, $2) {
    {
      $1.push($2);
      $$ = $1;
    }
    return $$;
  },
  function ($2, $3) {
    {
      $$ = {
        kind: 'DIRECTIVE',
        arguments: $3,
        name: $2,
      };
    }
    return $$;
  },
  function ($1) {
    {
      $$ = $1;
    }
    return $$;
  },
  function () {
    {
      $$ = null;
    }
    return $$;
  },
  function ($1) {
    {
      $$ = [$1];
    }
    return $$;
  },
  function ($1, $2) {
    {
      $1.push($2);
      $$ = $1;
    }
    return $$;
  },
  function ($2, $3) {
    {
      $$ = {
        kind: 'DIRECTIVE',
        arguments: $3,
        name: $2,
      };
    }
    return $$;
  },
  function ($2) {
    {
      $$ = $2;
    }
    return $$;
  },
  function ($1) {
    {
      $$ = $1;
    }
    return $$;
  },
  function () {
    {
      $$ = null;
    }
    return $$;
  },
  function ($1) {
    {
      $$ = [$1];
    }
    return $$;
  },
  function ($1, $2) {
    {
      $1.push($2);
      $$ = $1;
    }
    return $$;
  },
  function ($1) {
    {
      $$ = $1;
    }
    return $$;
  },
  function ($1) {
    {
      $$ = $1;
    }
    return $$;
  },
  function ($1) {
    {
      $$ = $1;
    }
    return $$;
  },
  function ($1, $2, $3, $4) {
    {
      $$ = {
        kind: 'FIELD',
        alias: null,
        arguments: $2,
        directives: $3,
        name: $1,
        selections: $4,
      };
    }
    return $$;
  },
  function ($1, $2, $3, $4, $5) {
    {
      $$ = {
        kind: 'FIELD',
        alias: $1,
        arguments: $3,
        directives: $4,
        name: $2,
        selections: $5,
      };
    }
    return $$;
  },
  function ($1) {
    {
      $$ = $1;
    }
    return $$;
  },
  function ($2) {
    {
      $$ = $2;
    }
    return $$;
  },
  function () {
    {
      $$ = null;
    }
    return $$;
  },
  function ($1) {
    {
      $$ = [$1];
    }
    return $$;
  },
  function ($1, $2) {
    {
      $1.push($2);
      $$ = $1;
    }
    return $$;
  },
  function ($1, $3) {
    {
      $$ = {
        kind: 'ARGUMENT',
        name: $1,
        value: $3,
      };
    }
    return $$;
  },
  function ($2) {
    {
      $$ = $2;
    }
    return $$;
  },
  function () {
    {
      $$ = null;
    }
    return $$;
  },
  function ($1) {
    {
      $$ = [$1];
    }
    return $$;
  },
  function ($1, $2) {
    {
      $1.push($2);
      $$ = $1;
    }
    return $$;
  },
  function ($1, $3) {
    {
      $$ = {
        kind: 'ARGUMENT',
        name: $1,
        value: $3,
      };
    }
    return $$;
  },
  function ($1) {
    {
      $$ = $1;
    }
    return $$;
  },
  function ($1) {
    {
      $$ = $1;
    }
    return $$;
  },
  function ($1) {
    {
      $$ = $1;
    }
    return $$;
  },
  function ($1) {
    {
      $$ = $1;
    }
    return $$;
  },
  function ($1) {
    {
      $$ = $1;
    }
    return $$;
  },
  function ($1) {
    {
      $$ = $1;
    }
    return $$;
  },
  function ($1) {
    {
      $$ = {
        kind: 'STRING',
        block: false,
        // TODO: consider doing this slice in the lexer
        value: $1.contents.slice(1, -1),
      };
    }
    return $$;
  },
  function ($1) {
    {
      $$ = {
        kind: 'STRING',
        block: true,
        // TODO: preprocess value here...
        value: $1.contents,
      };
    }
    return $$;
  },
  function () {
    {
      $$ = {
        kind: 'LIST_VALUE',
        value: [],
      };
    }
    return $$;
  },
  function ($2) {
    {
      $$ = {
        kind: 'LIST_VALUE',
        value: $2,
      };
    }
    return $$;
  },
  function ($1) {
    {
      $$ = [$1];
    }
    return $$;
  },
  function ($1, $2) {
    {
      $1.push($2);
      $$ = $1;
    }
    return $$;
  },
  function () {
    {
      $$ = {
        kind: 'OBJECT_VALUE',
        fields: [],
      };
    }
    return $$;
  },
  function ($2) {
    {
      $$ = {
        kind: 'OBJECT_VALUE',
        fields: $2,
      };
    }
    return $$;
  },
  function ($1) {
    {
      $$ = [$1];
    }
    return $$;
  },
  function ($1, $2) {
    {
      $1.push($2);
      $$ = $1;
    }
    return $$;
  },
  function ($1, $3) {
    {
      $$ = {
        name: $1,
        value: $3,
      };
    }
    return $$;
  },
  function ($2, $4, $5, $6) {
    {
      $$ = {
        kind: 'FRAGMENT',
        directives: $5,
        name: $2,
        on: $4,
        selections: $6,
      };
    }
    return $$;
  },
  function ($1) {
    {
      $$ = $1.contents;
    }
    return $$;
  },
  function ($2, $3) {
    {
      $$ = {
        kind: 'FRAGMENT_SPREAD',
        name: $2,
        directives: $3,
      };
    }
    return $$;
  },
  function ($2, $3, $4) {
    {
      $$ = {
        kind: 'INLINE_FRAGMENT',
        directives: $3,
        on: $2,
        selections: $4,
      };
    }
    return $$;
  },
  function ($2) {
    {
      $$ = $2;
    }
    return $$;
  },
  function () {
    {
      $$ = null;
    }
    return $$;
  },
];
