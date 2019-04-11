// Function Context
// "Invocation Context"

// as a function (baseless function)
// this is the window

// as a method
// a method is a function that is a property of an object
// this becomes the object (that is receiving the method call)


// via a method of the function object

// bind
// call
// apply

// as a contructor

// use the new keyword to invoke as a constructor
// by convention we use a capital letter

// this becomes the newly created "instance"

function thisLogger() {
	console.log(this)
}

function locationLogger() {
	console.log(this.location)
}

const listEmployees = function() {
	// console.log('on the OUTER fn this is', this);

	this.employees.forEach(employee => {
	  console.log(`Employee: ${employee.name} works at ${this.name}`)
	})
	// console.log('on the OUTER fn this is', this);
}


const tgif = {
	name: "T.G.I. Friday's",
	location: "up the street",
	thisLogger: thisLogger,
	locationLogger: locationLogger,
	employees: [
	  {name: 'alex'},
	  {name: 'ian'},
	  {name: 'vicky'},
	],
	listEmployees: listEmployees
}

const chipotle = {
	name: "Chipotle Mexican Grill",
	location: "down the street",
	thisLogger: thisLogger,
	locationLogger: locationLogger,
	employees: [
	  {name: 'evans'},
	  {name: 'jeff'},
	  {name: 'vera'},
	],
	listEmployees: listEmployees
}


// factory Pattern


const restaurantFactory = function(name, employeeList) {
	const list = function() {

		this.employees.forEach(employee => {
		  console.log(`Employee: ${employee.name} works at ${this.name}`)
		})
	}

	return {
		name: name,
		employees: employeeList.map(em => ({name: em})),
		list: list
	}
}

// function Restaurant(name, employees) {
	// console.log(this);
	// this.name = name
	// // console.log(this);
	// this.employees = employees.map(em => ({name: em}))
	// console.log(this);
//
// 	// this.list = function() {
// 	//
// 	// 	this.employees.forEach(employee => {
// 	// 	  console.log(`Employee: ${employee.name} works at ${this.name}`)
// 	// 	})
// 	// }
// }
//
// Restaurant.prototype.list = function() {
//
	// this.employees.forEach(employee => {
	//   console.log(`Employee: ${employee.name} works at ${this.name}`)
	// })
// }


class Restaurant {
	constructor(name, employees){
		console.log('in the constructor', this);
		this.name = name
		this.employees = employees.map(em => ({name: em}))

		this.constructor.all.push(this)
	}

	list() {
		this.employees.forEach(employee => {
			console.log(`Employee: ${employee.name} works at ${this.name}`)
		})
	}
}

Restaurant.all = []
