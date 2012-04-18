//Family of settlers traveling the Old West

//Clark Kent
var clark = {
	name: "Clark Kent",
	age: 18
	
};
	

//Pa Kent
var pa = {
	name: "Jonathan Kent",
	age: 42,
	bearded: true
};

//Ma Kent
var ma = {
	name: "Martha Kent",
	age: 40,
	isHappy: function(happyClark) {
		happyClark = true;
		if (happyClark === true) {
		happyMartha = true;
		console.log("Martha is happy!");
		}
		else {
		happyMartha = false;
		console.log("Martha is not happy!");
		};
	}
};

ma.isHappy();
