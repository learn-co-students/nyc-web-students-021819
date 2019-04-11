// Function Context
// "Invocation Context"

// as a function (baseless function)
// as a method
// via a method of the function object
// as a contructor

function thisLogger() {
	console.log(this)
}

function locationLogger() {
	console.log(this.location)
}

const listEmployees = function() {
	this.employees.forEach(function(employee) {
	  console.log(`Employee: ${employee.name}`)
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
	location: 'down the street',
	thisLogger: thisLogger,
	locationLogger: locationLogger,
	employees: [
	  {name: 'evans'},
	  {name: 'jeff'},
	  {name: 'vera'},
	],
	listEmployees: listEmployees
}
