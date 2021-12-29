import DFA from '../DFA';

// How to represent graph? Adjacency list?
const vertices = [];
const edges = [];
// Adjacency matrix? (ie. given V vertices, V*V cells)
// In memory graph with pointers?

const input = /foo/;
const ast = {
  kind: 'Sequence',
  children: [
    {kind: 'Atom', value: 'f'},
    {kind: 'Atom', value: 'o'},
    {kind: 'Atom', value: 'o'},
  ],
};
// desired:
//    label:      (start)                  (accept)
//    states:       [0]     [1]     [2]     [3]
//    transitions:     --f->   --o->   --o->

// If we use an adjacency list:
vertices[0] = {kind: 'Start'};
vertices[1] = {kind: 'Internal'};
vertices[2] = {kind: 'Internal'};
vertices[3] = {kind: 'Accept', produce: 'Foo'};
edges.push([0, 1], 'f');
edges.push([1, 2], 'o');
edges.push([2, 3], 'o');

// If we use a pointer-based graph (easy enough for this example, but modeling
// cycles would be fiddly):
const states = {
  index: 0,
  kind: 'Start',
  transitions: {
    f: {
      index: 1,
      kind: 'Internal',
      transitions: {
        o: {
          index: 2,
          kind: 'Internal',
          transitions: {
            o: {
              index: 3,
              kind: 'Accept',
              produce: 'Foo',
            },
          },
        },
      },
    },
  },
};

// A variant which is a hybrid of adjacency list and pointer-based is to embed
// transition info in nodes in a list:
vertices[0] = {kind: 'Start', transitions: {f: 1}};
vertices[1] = {kind: 'Internal', transitions: {o: 2}};
vertices[2] = {kind: 'Internal', transitions: {o: 3}};
vertices[3] = {kind: 'Accept', produce: 'Foo'};

// Want to be able to collapse ~~wave function~~ DFA from
// not-really-deterministic-FA to actually-deterministic-FA.
// eg. given /foobar|foobaz/
// want to collapse
//            /f--o--o--b--a--r
//     [start]
//            \f--o--o--b--a--z
// to:
//                          /-r
//     [start]-f--o--o--b--a
//                          \-z
// (ie. merge common prefix)
// same for common suffix
// which we can do by merging identical states
// -- how do we know if they are identical?
// well, i want to say, if they have the same transition condition, the DFA-ness
// of it means they must lead to "the same place"
// as in, even though "f" leads to both "foobar" and "foobaz", eventually, the
// fact that we're producing a DFA means that, by definition, the initial "f"
// can be collapsed to be the same place, otherwise it wouldn't be a DFA
// i guess another way of saying that is that we collapse transitions, not
// states (and it ends up looking like the same thing).

// ie. we want a data structure that lends it self to this kind of
// transformation
// and also, once finished, we can straightforwardly use to generate code (ie. a
// switch statement) — that means we might need to go back and add state numbers
// after the fact in a separate pass

describe('DFA()', () => {
  it('handles sequences', () => {
    expect(new DFA(/stuff/).table).toEqual([
      [[{kind: 'Atom', value: 's'}, 1]],
      [[{kind: 'Atom', value: 't'}, 2]],
      [[{kind: 'Atom', value: 'u'}, 3]],
      [[{kind: 'Atom', value: 'f'}, 4]],
      [[{kind: 'Atom', value: 'f'}, 5]],
      [], // Final (accept) state.
    ]);
  });

  it('handles alternation', () => {
    expect(new DFA(/a|b|c|d|e/).table).toEqual([
      [
        [{kind: 'Atom', value: 'a'}, 1],
        [{kind: 'Atom', value: 'b'}, 1],
        [{kind: 'Atom', value: 'c'}, 1],
        [{kind: 'Atom', value: 'd'}, 1],
        [{kind: 'Atom', value: 'e'}, 1],
      ],
      [], // Final (accept) state.
    ]);
  });

  it('handles a NAME-ish pattern like /[_a-z][_a-z\\d]*/i', () => {
    expect(new DFA(/[_a-z][_a-z\d]*/i).table).toEqual([
      [
        [{kind: 'Range', from: 'A', to: 'Z'}, 1],
        [{kind: 'Atom', value: '_'}, 1],
        [{kind: 'Range', from: 'a', to: 'z'}, 1],
      ],
      [
        // BUG: next state here should be 1, not 2
        [{kind: 'Range', from: '0', to: '9'}, 2],
        [{kind: 'Range', from: 'A', to: 'Z'}, 2],
        [{kind: 'Atom', value: '_'}, 2],
        [{kind: 'Range', from: 'a', to: 'z'}, 2],
      ],
      [], // Final (accept) state.
    ]);
  });
});

// consider also building graph without numbered states
// seq = chain states together like a linked list
//       wind up with start and end of seq
// alt = multiple outbound - easy if they're atoms, but what if they are sequences?
//       in that case, we need to recurse into sequences (getting chains)
//       and connect them all at the end
//
// given a number-based graph, how to generate code?
// and how would that be different given a pointer-based graph data structure
// (with no numbers)?
// and compare that again to deriving from ast directly without dfa
// (could get messy for non-simple cases)
//
// and if dfa leads to complex code, may want to go to ast first then
// pretty-print that as opposed to using builder directly
// (of fuck it: ugly-print it and then pipe that out through prettier)
