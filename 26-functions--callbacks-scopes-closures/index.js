const assert = function (description, callback) {
  console.log('callback is?', callback);
  var resultsList = document.querySelector('.results')
  var li = document.createElement('li')
  li.className = callback() ? 'pass' : 'fail'
  li.innerText = description
  resultsList.appendChild(li)
}

const addition = (a, b) => {
  return a + b
}


function expect(value) {
  // this should return an object
  console.log('value is', value);
  return {
    toEqual: function(expectedValue) {
       return value === expectedValue
    }
  }
}

// assert(
//   'This is a failing test',
//   function(){
//     return false
//   }
// )
assert('My addition fn adds two numbers', function(){
  let sum = addition(5, 3)


  return expect(sum).toEqual(8)
})

assert('My addition fn adds two numbers', function(){
  let sum = addition(5, 3)


  return expect(sum).toEqual(10)
})

// // practice.js
// // PROBLEM 1
// // PROBLEM 2
//
// // rewrite the assert function so that the second argument is a callback function
// // that returns true or false
//
// // practice.js
// // PROBLEM 3
//
// let numbers = [1,2,3,4,5]
//
// function myMap(arr, callback) {
//   let results = []
//   console.log('callback is', callback);
//   arr.forEach(function(n) {
//     results.push(callback(n))
//   })
//
//   return results
// }
//
// // myMap(numbers, function(n){ return n * 2 })
// function doubleNum(n){
//   return n * 2
// }
// myMap(numbers, doubleNum)
//
//
//
//
// // let num = null
// // assert('null is a falsey value', !num)
//
// assert('JS has numbers', function(){
//   let num = 7
//   return typeof num === 'number'
// })
//
// num = 7.00001
// assert('JS has floats', typeof num === 'number')
//
// var obj = {}
// assert('JS has objects', typeof obj === 'object')
//
// var obj = {name: 'charlie'}
// assert('We can use dot notation with objects', obj.name === 'charlie')
//
// var obj = {name: 'charlie'}
// assert('We can use bracket notation with objects', obj['name'] === 'charlie')
//
// var obj = {name: 'charlie'}
// var key = 'name'
// assert('We can use bracket notation with objects', obj[key] === 'charlie')
//
// var katzDeliLine = []
//
// function takeANumber(line, customer) {
//   line.push(customer)
//   return line.length
// }
//
// takeANumber(katzDeliLine, 'camille')
//
// assert('takeANumber adds a customer to the line', katzDeliLine.length === 1)
// assert(
//   'takeANumber returns the length of the line',
//   takeANumber(katzDeliLine, 'michael') === 2
// )
//
// function showLine(line) {
//   // "The line is 1. camille 2. micahel"
//   result = "The line is "
//
//   // for(where to start counting; when to stop counting; how to count) {
//   for(let i = 0; i < line.length; i++) {
//     console.log('the customer is', line[i]);
//     result += `${i + 1}. ${line[i]} `
//   }
//
//   return result
// }
//
// assert('showLine shows the line', showLine(katzDeliLine) === "The line is 1. camille 2. michael ")
