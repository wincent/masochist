/**
 * In development, pass `{strip: false}` to transform:
 *
 *    invariant(condition, 'Format %s', 'string');
 *
 * into:
 *
 *    if (!condition) {
 *      invariant(false, 'Format %s', 'string');
 *    }
 *
 * to prevent the unnecessary eager evaluation of the format string arguments.
 *
 * In production, pass `{strip: true}` to transform the same into:
 *
 *    if (!condition) {
 *      throw new Error('Invariant failed');
 *    }
 */
module.exports = function(babel) {
  const {types: t} = babel;
  const transformed = new Set();
  return {
    visitor: {
      CallExpression: {
        exit(path, state) {
          if (transformed.has(path.node)) {
            return;
          }
          if (path.get('callee').isIdentifier({name: 'invariant'})) {
            const condition = t.unaryExpression('!', path.node.arguments[0]);
            const call = t.callExpression(t.identifier('invariant'), [
              t.booleanLiteral(false),
              ...path.node.arguments.slice(1),
            ]);
            transformed.add(call);

            // If we just replace the CallExpression, Babel will wrap our
            // `ifStatement` in an IIFE or turn it into a ternary in order to
            // make it safe to use in expression position; avoid the
            // clutter by replacing parent instead, if it is a statement.
            const replace = path.parentPath.isStatement()
              ? path.parentPath
              : path;

            if (state.opts.strip) {
              // Production-style.
              replace.replaceWith(
                t.ifStatement(
                  condition,
                  t.blockStatement([
                    t.throwStatement(
                      t.newExpression(t.identifier('Error'), [
                        t.stringLiteral('Invariant failed'),
                      ]),
                    ),
                  ]),
                ),
              );
            } else {
              // Development style.
              replace.replaceWith(
                t.ifStatement(
                  condition,
                  t.blockStatement([t.expressionStatement(call)]),
                ),
              );
            }
          }
        },
      },
    },
  };
};
