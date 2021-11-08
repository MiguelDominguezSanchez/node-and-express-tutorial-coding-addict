// CommonJS, every  file module (by default)
// Modules – Encapsulated Code (only share minimum)
const names = require('./4-names')
// const { john, peter } = require('./4-names') // destructured
const sayHi = require('./5-utils')
// console.log(names)
const data = require('./6-alternative-flavor')
// console.log(data)
require('./7-mind-grenade')

// sayHi('susan')
// sayHi(names.john) // property
// sayHi(names.peter) // property
// sayHi(john) // destructured
// sayHi(peter) // destructured

//  separated concerns

//

// CommonJS, every  file module (by default)
// Modules – Encapsulated Code (only share minimum)
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')
sayHi('susan')
sayHi(names.john) // property
sayHi(names.peter) // property
