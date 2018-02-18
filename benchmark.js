'use strict'

const {Suite} = require('benchmark')

const record = require('.')

const hugeModel = new Array(10000)
const hugeArr1 = new Array(10000)
const hugeArr2 = new Array(10000)
const hugeArr3 = new Array(10000)
for (let i = 0; i < 10000; i++) {
	const v = Math.round(Math.random() * 100)
	hugeModel.push(v)
	hugeArr1.push(v)
	hugeArr2.push(v + '')
	hugeArr3.push(v.toString(36)[0])
}

new Suite()

.add('5 items, applying 3x', function () {
	const apply = record([3, 1, 4, 2, 5])
	apply(['c', 'a', 'd', '2', '5'])
	apply(['3', '1', '4', '2', '5'])
	apply([3, 1, 4, 2, 5])
})

.add('10000 items, applying 3x', function () {
	const apply = record(hugeModel)
	apply(hugeArr1)
	apply(hugeArr2)
	apply(hugeArr3)
})

.on('error', (err) => {
	console.error(err)
	process.exitCode = 1
})
.on('cycle', (e) => {
	console.log(e.target.toString())
})
.run()
