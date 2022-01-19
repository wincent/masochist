import assert from 'assert';

import Heap from './Heap';
import Point2D from './Point2D';
import Queue from './Queue';
import RectHV from './RectHV';
import RedBlackBST from './RedBlackBST';

//
// Test min heap.
//

let heap = new Heap<number>((a: number, b: number) => b - a);

assert.strictEqual(heap.extract(), undefined, 'Heap starts off empty');

heap.insert(10);

assert.strictEqual(heap.extract(), 10, 'Can extract an item');

assert.strictEqual(heap.extract(), undefined, 'Heap is empty after extraction');

heap.insert(20);
heap.insert(120);
heap.insert(20);
heap.insert(40);
heap.insert(60);
heap.insert(10);

assert.strictEqual(heap.extract(), 10, 'Extracts smallest item (10)');
assert.strictEqual(heap.extract(), 20, 'Extracts smallest item (20)');
assert.strictEqual(heap.extract(), 20, 'Extracts smallest item (20)');
assert.strictEqual(heap.extract(), 40, 'Extracts smallest item (40)');

// Interleave some inserts.

heap.insert(5);
heap.insert(200);

assert.strictEqual(heap.extract(), 5, 'Extracts smallest item (5)');
assert.strictEqual(heap.extract(), 60, 'Extracts smallest item (60)');
assert.strictEqual(heap.extract(), 120, 'Extracts smallest item (120)');
assert.strictEqual(heap.extract(), 200, 'Extracts smallest item (200)');

assert.strictEqual(heap.extract(), undefined, 'Heap ends up empty');

//
// Test max heap.
//

heap = new Heap<number>((a: number, b: number) => a - b);

assert.strictEqual(heap.extract(), undefined, 'Heap starts off empty');

heap.insert(10);
heap.insert(20);
heap.insert(120);
heap.insert(20);
heap.insert(40);
heap.insert(60);
heap.insert(10);

assert.strictEqual(heap.extract(), 120, 'Extracts largest item (120)');
assert.strictEqual(heap.extract(), 60, 'Extracts largest item (60)');
assert.strictEqual(heap.extract(), 40, 'Extracts largest item (40)');
assert.strictEqual(heap.extract(), 20, 'Extracts largest item (20)');

// Interleave some inserts.

heap.insert(5);
heap.insert(200);

assert.strictEqual(heap.extract(), 200, 'Extracts largest item (200)');
assert.strictEqual(heap.extract(), 20, 'Extracts largest item (20)');
assert.strictEqual(heap.extract(), 10, 'Extracts largest item (10)');
assert.strictEqual(heap.extract(), 10, 'Extracts largest item (10)');
assert.strictEqual(heap.extract(), 5, 'Extracts largest item (5)');

assert.strictEqual(heap.extract(), undefined, 'Heap ends up empty');

//
// A heap with a "novel" comparison function (ie. uses insertion order as a
// tie-breaker, which is something you would typically want in an actual
// priority queue).
//

const pq = new Heap<{rank: number; value: number}>(
	(a: {rank: number; value: number}, b: {rank: number; value: number}) => {
		if (a.value !== b.value) {
			return b.value - a.value;
		} else {
			// Tie-break on rank.
			return b.rank - a.rank;
		}
	}
);

let timestamp = 0;

pq.insert({value: 50, rank: timestamp++});
pq.insert({value: 10, rank: timestamp++});
pq.insert({value: 75, rank: timestamp++});
pq.insert({value: 50, rank: timestamp++});
pq.insert({value: 75, rank: timestamp++});

assert.deepStrictEqual(
	pq.extract(),
	{value: 10, rank: 1},
	'Extracts the smallest item (10)'
);
assert.deepStrictEqual(
	pq.extract(),
	{value: 50, rank: 0},
	'Tiebreaks using rank (50, rank 0)'
);
assert.deepStrictEqual(
	pq.extract(),
	{value: 50, rank: 3},
	'Extracts the smallest item (50)'
);
assert.deepStrictEqual(
	pq.extract(),
	{value: 75, rank: 2},
	'Tiebreaks using rank (75, rank 2)'
);
assert.deepStrictEqual(
	pq.extract(),
	{value: 75, rank: 4},
	'Extracts the smallest item (75)'
);

//
// Queue
//

const queue = new Queue<number>();

assert(queue.isEmpty(), 'queue is initially empty');
assert.strictEqual(
	queue.dequeue(),
	null,
	'dequeuing from empty queue returns null'
);
queue.enqueue(10);
assert(!queue.isEmpty(), 'queue is non-empty after enqueuing');
assert.strictEqual(queue.dequeue(), 10, 'can dequeue enqueued element');
assert(queue.isEmpty(), 'queue is empty again after dequeuing');
queue.enqueue(20);
queue.enqueue(15);
queue.enqueue(25);
assert.strictEqual(queue.dequeue(), 20, 'elements dequeue in FIFO order');
assert.strictEqual(queue.dequeue(), 15, 'elements dequeue in FIFO order');
assert.strictEqual(queue.dequeue(), 25, 'elements dequeue in FIFO order');
assert.deepStrictEqual([...queue], [], 'queue is iterable when empty');
queue.enqueue(60);
queue.enqueue(40);
queue.enqueue(90);
assert.deepStrictEqual(
	[...queue],
	[60, 40, 90],
	'queue is iterable when non-empty'
);

//
// RectHV
//

// From example diagram: https://coursera.cs.princeton.edu/algs4/assignments/kdtree/specification.php

const rect = new RectHV(0.4, 0.3, 0.8, 0.6);

assert(rect.contains(new Point2D(0.6, 0.5)), 'contains a point');
assert(
	approximately(rect.distanceTo(new Point2D(0.1, 0.4)), 0.3),
	'is 0.3 to point on left'
);
assert.strictEqual(
	rect.distanceTo(new Point2D(0.0, 0.0)),
	0.5,
	'is 0.5 to point below-left'
);
assert.strictEqual(
	rect.distanceTo(new Point2D(0.6, 0.5)),
	0.0,
	'is 0.0 to contained point'
);

//
// RedBlackBST
//

class ComparableString {
	_value: string;

	constructor(value: string) {
		this._value = value;
	}

	compareTo(that: ComparableString): number {
		if (this._value < that._value) {
			return -1;
		} else if (this._value > that._value) {
			return 1;
		} else {
			return 0;
		}
	}

	toString(): string {
		return this._value;
	}
}

const rbt = new RedBlackBST<ComparableString, number>();

// Example from: https://algs4.cs.princeton.edu/33balanced/RedBlackBST.java.html

[...'SEARCHEXAMPLE'].forEach((letter, i) => {
	rbt.put(new ComparableString(letter), i);
});

const tuples = [...rbt.keys()].map((key: ComparableString) => {
	return [key.toString(), rbt.get(key)];
});

assert.deepStrictEqual(
	tuples,
	[
		['A', 8],
		['C', 4],
		['E', 12],
		['H', 5],
		['L', 11],
		['M', 9],
		['P', 10],
		['R', 3],
		['S', 0],
		['X', 7],
	],
	'reads out keys and values in key order'
);

// Show that keys can be overwritten.

assert.strictEqual(rbt.size, 10);
const m = new ComparableString('M');
rbt.put(m, 100);
assert.strictEqual(rbt.size, 10);
assert.strictEqual(rbt.get(m), 100);

//
// Utils
//

/**
 * Helper for comparing floating point numbers, which may lose some precision
 * during calculations.
 */
function approximately(a: number, b: number, threshhold = 0.0000001) {
	return Math.abs(a - b) < threshhold;
}
