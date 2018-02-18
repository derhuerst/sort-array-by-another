'use strict'

const test = require('tape')

const record = require('.')

test('works', (t) => {
	const apply = record([3, 1, 4, 2])
	t.plan(3)

	const a1 = apply(['c', 'a', 'd', 'b'])
	t.deepEqual(a1, ['a', 'b', 'c', 'd'])
	const a2 = apply([3, 1, 4, 2])
	t.deepEqual(a2, [1, 2, 3, 4])
	const a3 = apply(['3', '1', '4', '2'])
	t.deepEqual(a3, ['1', '2', '3', '4'])
})

test('applies to unsortable arrays', (t) => {
	const o1 = {}
	const o2 = {}
	const o3 = {}
	const o4 = {}
	t.plan(1)

	const apply = record([3, 1, 4, 2])
	const newArr = apply([o3, o1, o4, o2])
	t.deepEqual(newArr, [o1, o2, o3, o4])
})
