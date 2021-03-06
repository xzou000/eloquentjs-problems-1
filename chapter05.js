/*
 * Add your solutions to the chapter 5 problems from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */
const ancestry = require('./ancestry');

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

const byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});


// Problem 1: Flattening
function flatten(arrays) {
  // Your code here
  console.log(arrays.reduce(function(a, b){return a.concat(b)},[]));
  
}

// Problem 2: Mother-child age difference
/* This must return the average age difference instead of printing it */
function averageMomChildAgeDiff() {
  // Your code here
	function average(array) {
		function plus(a, b) { return a + b; }
		return array.reduce(plus) / array.length;
	}

	var byName = {};
	ancestry.forEach(function(person) {
		byName[person.name] = person;
	});

	// Your code here.
	var hasKnownMother = function(person) {
		return person.mother in byName;
	};

	function getAgeDiff(person) {
		return person.born - byName[person.mother].born
	}
	console.log(Number(average(ancestry.filter(hasKnownMother).map(getAgeDiff)).toFixed(1)));
}

// Problem 3: Historical life expectancy
/* This must return the object/map with centuries as keys and average age
    for the century as the value
 */
function averageAgeByCentury() {
  // Your code here
  var defined_century ={};
	ancestry.forEach(function(person) {
		var century = Math.ceil(person.died / 100);
		if(!(century in defined_century))
			defined_century[century] = [];
		defined_century[century].push(person.died - person.born);
	});	
	for(var item in defined_century){
	  defined_century[item] = Number(average(defined_century[item]).toFixed(1));
	}
	console.log(defined_century);
}


// Do not modify below here.
module.exports = { flatten, averageMomChildAgeDiff, averageAgeByCentury };

