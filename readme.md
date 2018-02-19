# sort-array-by-another

**Sort an array, then apply the same steps to another array.**

[![npm version](https://img.shields.io/npm/v/sort-array-by-another.svg)](https://www.npmjs.com/package/sort-array-by-another)
[![build status](https://api.travis-ci.org/derhuerst/sort-array-by-another.svg?branch=master)](https://travis-ci.org/derhuerst/sort-array-by-another)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/sort-array-by-another.svg)
[![chat with me on Gitter](https://img.shields.io/badge/chat%20with%20me-on%20gitter-512e92.svg)](https://gitter.im/derhuerst)
[![support me on Patreon](https://img.shields.io/badge/support%20me-on%20patreon-fa7664.svg)](https://patreon.com/derhuerst)


## Installing

```shell
npm install sort-array-by-another
```


## Usage

Let's assume we have arrays of properties:

```js
const names = ['boris', 'ada', 'charles']
const student = [false, true, true]
const ages = [20, 10, 30]
```

For performance reasons, we won't use an array of objects, but use `sort-array-by-another` instead:

```js
const recordSort = require('sort-array-by-another')

const applySort = recordSort(ages)
applySort(student)
// [true, false, true]
applySort(names)
// ['ada', 'boris', 'charles']
```

Using `sortArrayByAnother`, you can sort `items` the same way that [`Array.prototype.sort`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) will sort `model`:


## Contributing

If you have a question or have difficulties using `sort-arrays-by-another, please double-check your code and setup first. If you think you have found a bug or want to propose a feature, refer to [the issues page](https://github.com/derhuerst/sort-array-by-another/issues).
