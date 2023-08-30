import {describe, expect, it} from '@jest/globals';
import {dedent} from '@masochist/common';

import {
  AMPERSAND,
  AT,
  BANG,
  BAR,
  CLOSING_BRACE,
  CLOSING_BRACKET,
  CLOSING_PAREN,
  COLON,
  DOLLAR,
  ELLIPSIS,
  EQUALS,
  NAME,
  OPENING_BRACE,
  OPENING_BRACKET,
  OPENING_PAREN,
} from '../../definition';
import union from '../../union';
import dotifyTransitionTable from '../dotifyTransitionTable';

describe('dotifiesTransitionTable()', () => {
  it('dotifies a transition table', () => {
    const table = union(
      // Punctuators.
      {
        AMPERSAND,
        AT,
        BANG,
        BAR,
        CLOSING_BRACE,
        CLOSING_BRACKET,
        CLOSING_PAREN,
        COLON,
        DOLLAR,
        ELLIPSIS,
        EQUALS,
        OPENING_BRACE,
        OPENING_BRACKET,
        OPENING_PAREN,

        // TODO: strings and numbers too

        // Other Lexical tokens.
        NAME,
      },
    );

    expect(dotifyTransitionTable(table)).toEqual(dedent`
      digraph finite_state_machine {
        bgcolor = "transparent";
        rankdir = LR;
        ratio = 0.5625; // 16:9.

        // Invisible node from which to draw start transition to start state.
        node [style = invis]; -1;

        // Accept states.
        node [color = "black", fontcolor = "black", style = "", shape = doublecircle, xlabel = "BANG"]; 1;
        node [color = "black", fontcolor = "black", style = "", shape = doublecircle, xlabel = "NAME"]; 10;
        node [color = "black", fontcolor = "black", style = "", shape = doublecircle, xlabel = "OPENING_BRACKET"]; 11;
        node [color = "black", fontcolor = "black", style = "", shape = doublecircle, xlabel = "CLOSING_BRACKET"]; 12;
        node [color = "black", fontcolor = "black", style = "", shape = doublecircle, xlabel = "OPENING_BRACE"]; 13;
        node [color = "black", fontcolor = "black", style = "", shape = doublecircle, xlabel = "BAR"]; 14;
        node [color = "black", fontcolor = "black", style = "", shape = doublecircle, xlabel = "CLOSING_BRACE"]; 15;
        node [color = "black", fontcolor = "black", style = "", shape = doublecircle, xlabel = "ELLIPSIS"]; 17;
        node [color = "black", fontcolor = "black", style = "", shape = doublecircle, xlabel = "DOLLAR"]; 2;
        node [color = "black", fontcolor = "black", style = "", shape = doublecircle, xlabel = "AMPERSAND"]; 3;
        node [color = "black", fontcolor = "black", style = "", shape = doublecircle, xlabel = "OPENING_PAREN"]; 4;
        node [color = "black", fontcolor = "black", style = "", shape = doublecircle, xlabel = "CLOSING_PAREN"]; 5;
        node [color = "black", fontcolor = "black", style = "", shape = doublecircle, xlabel = "COLON"]; 7;
        node [color = "black", fontcolor = "black", style = "", shape = doublecircle, xlabel = "EQUALS"]; 8;
        node [color = "black", fontcolor = "black", style = "", shape = doublecircle, xlabel = "AT"]; 9;

        // Catch-all (default) for remaining states.
        node [color = "black", fontcolor = "black", style = "", shape = circle, xlabel = ""];

        -1 -> 0 [color = "black", fontcolor = "black"];
        0 -> 1 [color = "black", fontcolor = "black", label = "!"];
        0 -> 2 [color = "black", fontcolor = "black", label = "$"];
        0 -> 3 [color = "black", fontcolor = "black", label = "&"];
        0 -> 4 [color = "black", fontcolor = "black", label = "("];
        0 -> 5 [color = "black", fontcolor = "black", label = ")"];
        0 -> 6 [color = "black", fontcolor = "black", label = "."];
        0 -> 7 [color = "black", fontcolor = "black", label = ":"];
        0 -> 8 [color = "black", fontcolor = "black", label = "="];
        0 -> 9 [color = "black", fontcolor = "black", label = "@"];
        0 -> 10 [color = "black", fontcolor = "black", label = "A-Z"];
        0 -> 11 [color = "black", fontcolor = "black", label = "["];
        0 -> 12 [color = "black", fontcolor = "black", label = "]"];
        0 -> 10 [color = "black", fontcolor = "black", label = "_"];
        0 -> 10 [color = "black", fontcolor = "black", label = "a-z"];
        0 -> 13 [color = "black", fontcolor = "black", label = "{"];
        0 -> 14 [color = "black", fontcolor = "black", label = "|"];
        0 -> 15 [color = "black", fontcolor = "black", label = "}"];
        6 -> 16 [color = "black", fontcolor = "black", label = "."];
        10 -> 10 [color = "black", fontcolor = "black", label = "0-9"];
        10 -> 10 [color = "black", fontcolor = "black", label = "A-Z"];
        10 -> 10 [color = "black", fontcolor = "black", label = "_"];
        10 -> 10 [color = "black", fontcolor = "black", label = "a-z"];
        16 -> 17 [color = "black", fontcolor = "black", label = "."];
      }
    `);
  });
});
