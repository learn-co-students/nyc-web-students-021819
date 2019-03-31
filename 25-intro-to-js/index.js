console.log('we are here');


assert('JS has == equality operator', 2 == 2)
assert('Double equals coerces types', 2 == '2')
assert('Triple equals does not coerce types', 2 !== '2')


var num
console.log('num is:', num);
assert('undefined is a falsey value', !num)

var num = null
assert('null is a falsey value', !num)

var num = 7
assert('JS has numbers', typeof num === 'number')

var num = 7.00001
assert('JS has floats', typeof num === 'number')

assert('JS has strings', typeof 'hello' === 'string')

function name() {
  return "alex"
}

assert('JS has string templating', `Hello ${name()}` === "Hello alex")

var arr = []
assert('JS has arrays', Array.isArray(arr))

var obj = {}
assert('JS has objects', typeof obj === 'object')

var obj = {name: 'charlie'}
assert('We can use dot notation with objects', obj.name === 'charlie')

var obj = {name: 'charlie'}
assert('We can use bracket notation with objects', obj['name'] === 'charlie')

var obj = {name: 'charlie'}
var key = 'name'
assert('We can use bracket notation with objects', obj[key] === 'charlie')


var katzDeliLine = []

function takeANumber(line, customer) {
  line.push(customer)
  return line.length
}

takeANumber(katzDeliLine, 'camille')

assert('takeANumber adds a customer to the line', katzDeliLine.length === 1)
assert(
  'takeANumber returns the length of the line',
  takeANumber(katzDeliLine, 'michael') === 2
)

function showLine(line) {
  // "The line is 1. camille 2. micahel"
  result = "The line is "

  // for(where to start counting; when to stop counting; how to count) {
  for(let i = 0; i < line.length; i++) {
    console.log('the customer is', line[i]);
    result += `${i + 1}. ${line[i]} `
  }

  return result
}

assert('showLine shows the line', showLine(katzDeliLine) === "The line is 1. camille 2. michael ")
