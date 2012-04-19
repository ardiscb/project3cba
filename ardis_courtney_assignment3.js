//Characters copyrighted by DC Comics.

/*
Add and/or label:
Property: Object
Argument: Array
Argument: Number
Arugment: String
Argument: Boolean
Conditional
Nested Conditional
For loop
While loop
Nested loop
Math
Returns
Back
*/


//Contains Argument: Object
var handleData = function (family) {
	for (var i = 0; i < family.characters.length; i++) {
		var person = family.characters[i];
		console.log(
			"Name: " + 	person.name + 
			", Occupation: " + person.occupation
			);
	};
};

handleData(family);


//Clark Kent
var clark = {
	//Property: String
	name: "Clark Kent",
	//Property: Number
	age: 18,
	//Method: Function
	doSomething: function() {
		//Return: ?
		return something;
	}

};
	

//Pa Kent
var pa = {
	//Property: String
	name: "Jonathan Kent",
	//Property: Number
	age: 42,
	//Property: Boolean
	bearded: true
};

//Ma Kent
var ma = {
	//Property: String
	name: "Martha Kent",
	//Property: Number
	age: 40,
	//Method: Procedure
	isHappy: function(happyClark) {
		happyClark = true;
		if (happyClark === true) {
		happyMartha = true;
		//Output
		console.log("Martha is happy!");
		}
		else {
		happyMartha = false;
		//Output
		console.log("Martha is not happy!");
		};
	}
};

var something = {
	//Method: Accessor
	getSomething: function() {
	return something;
	},
	//Method: Mutator
	setSomething: function() {
	return something;
	}
};


ma.isHappy();


