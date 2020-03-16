'use strict'

const {Suite} = require('benchmark')

const record = require('.')

const hugeModel = new Array(100 * 1000)
const hugeData = new Array(100 * 1000)
for (let i = 0; i < 100 * 1000; i++) {
	const v = Math.round(Math.random() * 100)
	hugeModel.push(v)
	hugeData.push(v)
}
const applyHugeModel = record(hugeModel)

new Suite()

.add('5 items, recording & applying 3x', () => {
	const apply = record([3, 1, 4, 2, 5])
	apply(['c', 'a', 'd', '2', '5'])
	apply(['3', '1', '4', '2', '5'])
	apply([3, 1, 4, 2, 5])
})

.add('recording with 100000 items', () => {
	record(hugeModel)
})
.add('applying with 100000 items', () => {
	applyHugeModel(hugeData)
})

.on('error', (err) => {
	console.error(err)
	process.exitCode = 1
})
.on('cycle', (e) => {
	console.log(e.target.toString())
})
.run()
