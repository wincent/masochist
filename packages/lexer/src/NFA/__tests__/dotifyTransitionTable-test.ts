import {dedent} from '@masochist/common';

import compileRegExp from '../../compileRegExp';
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
  INTEGER_PART,
  NAME,
  OPENING_BRACE,
  OPENING_BRACKET,
  OPENING_PAREN,
} from '../../lexer';
import union from '../../union';
import NFAToDFA from '../NFAToDFA';
import dotifyTransitionTable from '../dotifyTransitionTable';
import regExpToNFA from '../regExpToNFA';
import removeEpsilons from '../removeEpsilons';
import sortEdges from '../sortEdges';
import toTransitionTable from '../toTransitionTable';

import type {TransitionTable} from '../TransitionTable';

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
        node [color = "black", fontcolor = "black", style = "", shape = doublecircle, xlabel = "NAME"]; 1;
        node [color = "black", fontcolor = "black", style = "", shape = doublecircle, xlabel = "CLOSING_BRACKET"]; 10;
        node [color = "black", fontcolor = "black", style = "", shape = doublecircle, xlabel = "CLOSING_BRACE"]; 11;
        node [color = "black", fontcolor = "black", style = "", shape = doublecircle, xlabel = "BAR"]; 12;
        node [color = "black", fontcolor = "black", style = "", shape = doublecircle, xlabel = "BANG"]; 13;
        node [color = "black", fontcolor = "black", style = "", shape = doublecircle, xlabel = "AT"]; 14;
        node [color = "black", fontcolor = "black", style = "", shape = doublecircle, xlabel = "AMPERSAND"]; 15;
        node [color = "black", fontcolor = "black", style = "", shape = doublecircle, xlabel = "ELLIPSIS"]; 17;
        node [color = "black", fontcolor = "black", style = "", shape = doublecircle, xlabel = "OPENING_PAREN"]; 2;
        node [color = "black", fontcolor = "black", style = "", shape = doublecircle, xlabel = "OPENING_BRACKET"]; 3;
        node [color = "black", fontcolor = "black", style = "", shape = doublecircle, xlabel = "OPENING_BRACE"]; 4;
        node [color = "black", fontcolor = "black", style = "", shape = doublecircle, xlabel = "EQUALS"]; 5;
        node [color = "black", fontcolor = "black", style = "", shape = doublecircle, xlabel = "DOLLAR"]; 7;
        node [color = "black", fontcolor = "black", style = "", shape = doublecircle, xlabel = "COLON"]; 8;
        node [color = "black", fontcolor = "black", style = "", shape = doublecircle, xlabel = "CLOSING_PAREN"]; 9;

        // Catch-all (default) for remaining states.
        node [color = "black", fontcolor = "black", style = "", shape = circle, xlabel = ""];

        -1 -> 0 [color = "black", fontcolor = "black"];
        0 -> 1 [color = "black", fontcolor = "black", label = "a-z"];
        0 -> 1 [color = "black", fontcolor = "black", label = "A-Z"];
        0 -> 1 [color = "black", fontcolor = "black", label = "_"];
        0 -> 2 [color = "black", fontcolor = "black", label = "("];
        0 -> 3 [color = "black", fontcolor = "black", label = "["];
        0 -> 4 [color = "black", fontcolor = "black", label = "{"];
        0 -> 5 [color = "black", fontcolor = "black", label = "="];
        0 -> 6 [color = "black", fontcolor = "black", label = "."];
        0 -> 7 [color = "black", fontcolor = "black", label = "$"];
        0 -> 8 [color = "black", fontcolor = "black", label = ":"];
        0 -> 9 [color = "black", fontcolor = "black", label = ")"];
        0 -> 10 [color = "black", fontcolor = "black", label = "]"];
        0 -> 11 [color = "black", fontcolor = "black", label = "}"];
        0 -> 12 [color = "black", fontcolor = "black", label = "|"];
        0 -> 13 [color = "black", fontcolor = "black", label = "!"];
        0 -> 14 [color = "black", fontcolor = "black", label = "@"];
        0 -> 15 [color = "black", fontcolor = "black", label = "&"];
        1 -> 1 [color = "black", fontcolor = "black", label = "a-z"];
        1 -> 1 [color = "black", fontcolor = "black", label = "A-Z"];
        1 -> 1 [color = "black", fontcolor = "black", label = "_"];
        1 -> 1 [color = "black", fontcolor = "black", label = "0-9"];
        6 -> 16 [color = "black", fontcolor = "black", label = "."];
        16 -> 17 [color = "black", fontcolor = "black", label = "."];
      }
    `);
  });
});
