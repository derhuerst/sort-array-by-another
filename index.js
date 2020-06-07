'use strict'

const record = (model, sortFn = null) => {
	const _sortFn = sortFn
		? (a, b) => sortFn(a[1], b[1])
		: (a, b) => a[1] - b[1]

	// todo: use a Map for this?
	const l = model.length
	let map = new Array(l)
	for (let i = 0; i < l; i++) map[i] = [i, model[i]]
	map = map.sort(_sortFn)
	for (let i = 0; i < l; i++) map[i] = map[i][0]

	const apply = (arr, newArr = new Array(l)) => {
		for (let i = 0; i < l; i++) newArr[i] = arr[map[i]]
		return newArr
	}
	return apply
}

module.exports = record
