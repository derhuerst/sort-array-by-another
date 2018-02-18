'use strict'

const byVal = (a, b) => a[1] - b[1]

const record = (model) => {
	// todo: use a Map for this?
	const l = model.length
	let map = new Array(l)
	for (let i = 0; i < l; i++) map[i] = [i, model[i]]
	map = map.sort(byVal)
	for (let i = 0; i < l; i++) map[i] = map[i][0]

	const apply = (arr) => {
		const newArr = []
		for (let i = 0; i < l; i++) newArr[i] = arr[map[i]]
		return newArr
	}
	return apply
}

module.exports = record
