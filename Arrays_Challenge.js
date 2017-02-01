// Purpose: Create a function that finds the highest number
// Signature: Take an array, and return the highest value in the array.
// Examples:
//    highestNumber({1, 4, 2}) -> 4
//    highestNumber([-1, -2, -4]) -> -1

function  highestNumber(array) {
  var sortedArray = array.sort(function(e1, e2) {
    return e1 - e2;
  })
  var max = sortedArray[sortedArray.length - 1]
  console.log(max);
}

// highestNumber([-1,-2,-3,-10,6,-4,100,-50,78])

// Purpose: Create a function that finds the lowest number
// Signature: Take an array, and return the lowest value in the array.
// Examples:
//    lowestNumber({1, 4, 2}) -> 1
//    lowestNumber([-1, -2, -4]) -> -4

function  lowestNumber(array) {
  var sortedArray = array.sort(function(e1, e2) {
    return e2 - e1;
  })
  var min = sortedArray[sortedArray.length - 1];
  console.log(min);
}

// Purpose: Create a function that finds the number closest to zero
// Signature: Take an array, and return the value closest to zero.


function  smallestNumber(array) {
  var maxValue = Infinity;
  var smallest = 0;
  array.forEach(function(element){
    if (Math.abs(element) < maxValue) {
      maxValue = Math.abs(element);
      smallest = element;
    }
  });
  console.log(smallest);
}

// Purpose: Create a function to calculate the sum of an array
// Signature: Take an array, and add up all of its elements.
// Examples:
//    sum([1,2,3]) -> 6
//    sum([]) -> 0

function sum(array) {
  var sum = 0
  array.forEach(function(element){
    sum = sum + element;
  });
  console.log(sum);
}

// Purpose: Create a function to calculate the mean of an array
// Signature: Take an array, and return the mean of the array.
// Examples:
//    sum([1,2,3]) -> 2

function mean(array) {
  var sum = 0
  array.forEach(function(element){
    sum = sum + element;
  });
  mean = sum / array.length;
  console.log(mean);
}

//Purpose: Create a function to return the highest index number//
// Signature: Take an array and return the index number of the highest value//
// Examples indexHighestNumber([1,4,2]) should return 1
//indexHighestNumber([-1,-2,-4]) should return 0


function  indexHighestNumber(array) {
  var maxValue = -Infinity;
  var smallest = 0;
  array.forEach(function(element){
    if (element > maxValue) {
      maxValue = element;
      highest = element;
    }
  });
  console.log(array.lastIndexOf(highest));
}

// Array of Strings
//
// Create an array with your siblings names, and an array with your parents names.
var siblings = ["Tommy", "Andre", "David", "Suzy", "Sally"];
var parents = ["Zed", "Cherie", "Edward", "Drew", "Kim"];

// Sort your siblings names in alphabetical order.
siblings.sort(function(e1, e2){
  return (e1 > e2) * 1 + (e1 < e2) * -1;
});

// Sort your parents names in reverse alphabetical order.
parents.sort(function(e1, e2){
  return (e1 < e2) * 1 + (e1 > e2) * -1;
});

// Sort all the names in alphabetical order.
// Hint: Combine the arrays into a single array.
var siblings = ["Tommy", "Andre", "David", "Suzy", "Sally"];
var parents = ["Zed", "Cherie", "Edward", "Drew", "Kim"];
var sibsParents = siblings.concat(parents);
sibsParents.sort(function(e1, e2){
  return (e1 > e2) * 1 + (e1 < e2) * -1;
});

// Sort all the names in reverse alphabetical order.
var siblings = ["Tommy", "Andre", "David", "Suzy", "Sally"];
var parents = ["Zed", "Cherie", "Edward", "Drew", "Kim"];
var sibsParents = siblings.concat(parents);
sibsParents.sort(function(e1, e2){
  return (e1 < e2) * 1 + (e1 > e2) * -1;
});

// Create a function that determines if a given name is amongst the names.
var siblings = ["Tommy", "Andre", "David", "Suzy", "Sally"];
var parents = ["Zed", "Cherie", "Edward", "Drew", "Kim"];
var sibsParents = siblings.concat(parents);
function isNameInArray() {
  name = prompt("What name would you like see if it is in the array?");
  console.log(sibsParents.includes(name);
}

// Advanced Functions
//Create a function that returns an array with only the even elements from the array.

// evenElements([1,2,3,4]) should return [2,4]
// Hint: use the % operator
// What happens if there are no even numbers?

var array = [1,2,3,4];

function evenElements(array) {
  var evenArray = [];
  array.forEach(function(element){
    var evenCheck = element % 2;
    if (evenCheck === 0) {
      evenArray.push(element);
    }
  });
  console.log(evenArray);
}

// Purpose: Create a function that returns an array with only the odd elements from the array
// Signature: Want to present an array of integers, and have it return an array with only odd integers.
// Examples:
//  oddElements([1,2,3,4]) --> [1,3]
//  oddElements([2,2,6,4]) --> []

var array = [1,2,3,4];

function oddElements(array) {
  var oddArray = [];
  array.forEach(function(element){
    var oddCheck = element % 2;
    if (oddCheck != 0) {
      oddArray.push(element);
    }
  });
  console.log(oddArray);
}

// Purpose: Create a function that take an array and a function, and returns a new array with return value of the function on each of the elements of the array.

function mapArray(array, func) {
  var returnArray = [];
  array.forEach(function(element){
    modElement = func(element);
    returnArray.push(modElement);
  });
  return returnArray;
}


// Purpose: Create a function that take an array and a function, and returns a new array with only the elements for which the function returns true.

function filterArray(array, func) {
  var returnArray = [];
  array.forEach(function(element){
    boolean = func(element);
    if (boolean === true) {
      returnArray.push(element);
    }
  });
  return returnArray;
}
