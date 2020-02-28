'use strict'

var cat1 = {
    name: 'Fluffy',
    age: 3,
    'strings can be properties names': 'Hello',
    123: 123,
}

console.log(cat1.name) // 'Fluffy'
console.log(cat1.age) // 3
console.log(cat1['strings can be properties names']) // 'Hello'

var stringPropertyName = 'strings can be properties names'
console.log(cat1[stringPropertyName]) // 'Hello'
console.log(cat1['strings can ' + 'be properties names']) // 'Hello'

console.log(cat1[123]) // 123
console.log(cat1['123']) // 123

console.log(cat1) // { ... }

console.log('----------------------------')

var cat2 = {}

cat2.name = 'Puszek'
cat2.name = 'Okruszek'
cat2.age = 4

console.log(cat2)