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

function thisLogger() {
	console.log(this)
}

function locationLogger() {
	console.log(this.location)
}

const listEmployees = function() {
	console.log('on the OUTER fn this is', this);

	this.employees.forEach(function(employee) {
		console.log('in the INNER fn this is', this);
	  console.log(`Employee: ${employee.name} works at ${this.name}`)
	})
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
