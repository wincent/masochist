/**
 * Checks `grammar` for validity, ensuring that it:
 *
 * - Has at least 1 rule.
 * - Uses all declared tokens.
 * - Does not use any undeclared tokens.
 * - Has no unreachable productions.
 * - Has no duplicate productions (ie. multiple copies of the same RHS for a
 *   given LHS).
 */
export default function validateGrammar(grammar: Grammar) {
  // TODO
}
