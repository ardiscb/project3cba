//Characters copyrighted by DC Comics.

/*
Add and/or label:
Property: Object
Argument: Array
Argument: Number
Arugment: String
Argument: Boolean
Nested Conditional
While loop
Nested loop
Math
Returns
Back
*/

//Global Variables
var clark = family.characters[0];

//Contains Argument: Object
var handleData = function (family) {
	for (var i = 0; i < family.characters.length; i++) {
		var person = family.characters[i];
		console.log(
			"My name is " + 	person.name + 
			". I am " + person.occupation
			);
	};
};

handleData(family);

//console.log(clark.name);

//
var getAge = function() {
		if (clark.age < 30) {
		//Return: String
			return (console.log("I, " + clark.name +  ", have not yet mastered all my skills."));
		}
		else {
			return (console.log("I, " + clark.name + ", have mastered all my skills."));
		};	
	};

getAge();


	

var maHappy = {
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
/*
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
*/

maHappy.isHappy();


