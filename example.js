'use strict'

const recordSort = require('.')

const names = ['boris', 'ada', 'charles']
const student = [false, true, true]
const ages = [20, 10, 30]

const applySort = recordSort(ages)
console.log(applySort(names))
console.log(applySort(student))
