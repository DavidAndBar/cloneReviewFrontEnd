console.log("Hi")
// Change in the code.
// Now I am going to do a simple program using .js

// Methods for arrays:

names = ["Peter","Ben","May","Mary","Jane"];

// We use forEach to iterate elements in one array [The forEach() method executes a provided function once for each array element]
names.forEach((name) => {
    console.log(`The name is: ${name}`);
});

// We can add a value to the names array adding .push method: 

names.push("Osborn")
console.log("--------------------");
names.forEach((name) => {
    console.log(`The name is: ${name}`);
});

// array.map method creates a new array populated with the results of calling a provided function on every element in the calling array.
numbers = [0,1,2,3,4,5,23,6,11,9,32,63,0,12];
squareNumbers = numbers.map(number=>number*number);
console.log(`Numbers = ${numbers}`);
console.log(`Numbers ^ 2  = ${squareNumbers}`);
usingSlice = numbers.slice(0,3) // Returns a portion of the array, from position 0 to 3.
console.log(usingSlice);
numbers.splice(0,3) // Splice method update the original array with the data you provide
console.log(`Splice: ${numbers}`);
const numbersFiltered = numbers.filter(number => number > 5)
console.log(`numbersFiltered: ${numbersFiltered}`);

/* cheat sheet for arrays:
    https://livecodestream.dev/post/must-know-javascript-array-methods/
    https://dev.to/vincenius/javascript-array-functions-cheatsheet-1c15
*/