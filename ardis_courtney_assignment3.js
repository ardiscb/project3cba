//Characters copyrighted by DC Comics.

/*
Add and/or label:
Property: Object
Argument: Array
Argument: Number
Arugment: String
Argument: Boolean
While loop
Nested loop
Math
Back
*/

//Global Variables
var clark = family.characters[0];

//Contains Argument: Object
//For loop
var introduction = function (family) {
	for (var i = 0; i < family.characters.length; i++) {
		var person = family.characters[i];
		console.log(
			"My name is " + 	person.name + 
			". I am " + person.occupation
			);
	};
};

introduction(family);

var skillAge = {
	//Method: Accessor
	getAge: function() {
		//Math
		if (clark.age < 30) {
			//Return String
			return (console.log("I, " + clark.name +  ", have not yet mastered all my skills. I am only " + clark.age + " years old."));
		}
		else {
			return (console.log("I, " + clark.name + ", have mastered all my skills. I am " + clark.age + " years old."));
		};	
	}
};

skillAge.getAge();


var familyHappy = {
	//Method: Procedure
	isHappy: function(happyClark, happyJon) {
		console.log("Is the family happy?");
		//Property: Boolean
		happyClark: true;
		happyJon: true;
		if (happyClark = true) {
			//Nested conditional
			if (happyJon = true) {
			happyFamily = true			
			return (console.log("Clark and Jonathan are both happy so Martha is also happy!"));		
			}
		else {
			console.log("No one is happy.");
			//Return Boolean
			return false;
		};
		};
	}
};

familyHappy.isHappy();

/*
var something = {
	//Method: Mutator
	setSomething: function() {
	return something;
	}
};
*/



