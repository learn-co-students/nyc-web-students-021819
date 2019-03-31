// Function Context
// "Invocation Context"

// as a function (baseless function)

function thisLogger() {
	console.log(this)
}
// this is the window
function locationLogger() {
	console.log(this.location)
}

// as a method

// a method is a function that is an attached to an object
// that is a property of that object

// when we invoke a function as a method, this is the obj that function
// is attached to

const obj = {
	location: 'nyc',
	locationLogger: locationLogger,
	thisLogger: function(){
		console.log(this)
	}
}

// via a method of the function object


const listEmployees = function() {
	// console.log('outside the loop this is:', this);

	// const that = this

	// Arrow functions implictly bind the context
	this.employees.forEach(employee => {
		// console.log('inside the callback to forEach this is:', this);
	  console.log(`Employee: ${employee.name} works at ${this.name}`)
	})

	// this.employees.forEach(function(employee){
	// 	// console.log('inside the callback to forEach this is:', this);
	//   console.log(`Employee: ${employee.name} works at ${this.name}`)
	// }.bind(this))
}

const tgif = {
	name: "T.G.I. Friday's",
	employees: [
	  {name: 'alex'},
	  {name: 'ali'},
	  {name: 'charlie'},
	],
	listEmployees: listEmployees
}
const chipotle = {
	name: "Chipotle Mexican Grill",
	employees: [
	  {name: 'evans'},
	  {name: 'jeff'},
	  {name: 'vera'},
	],
	listEmployees: listEmployees
}






// as a contstructor

// factory pattern
const dogFactory = function (name, color) {
	return {
		name: name,
		color: color,
		bark: function(){
			return `woof im ${this.name}`
		}
	}

}



// object literals

// factory function

// Object.create

// constructor function MUST BE CALLED WITH NEW KEYWORD



// const Dog = function (name, color) {
// 	console.log(this);
// 	this.name = name
// 	console.log(this);
// 	this.color = color
// 	console.log(this);
//
// }
//
// Dog.prototype.bark = function() {
//   console.log(`woof i am ${this.name}`)
// }


// class syntax

class Dog {
	constructor(name, color) {
		this.name = name
		this.color = color
	}

	bark() {
		return `woof i am ${this.name}`
	}
}
