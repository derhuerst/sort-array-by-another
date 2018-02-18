'use strict'

const recordSort = require('.')

const o1 = {first: true}
const o2 = {second: true}
const o3 = {third: true}
const items = [o2, o1, o3]
const model = [2, 1, 3]

const applySort = recordSort(model)
const sortedItems = applySort(items)

console.log(sortedItems)
