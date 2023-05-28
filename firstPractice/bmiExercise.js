// First, we show that .js environment has the variable "process". It's an object with a lot of information about the program execution.

console.log(process);

// Now, process has an array called argv where it stores all the execution arguments 
console.log(process.argv);

// Now, if we run the program running the statement: "node bmiExercise.js "David"", we are going to get:

/* [
    'C:\\Program Files\\nodejs\\node.exe',
    'C:\\Users\\david\\Desktop\\Review of Diplomado\\frontEnd\\ReviewFrontEnd\\firstPractice\\bmiExercise.js',
    'David'
]

If we want to access to the "David" value, we need to write: " process.argv[2] "
*/

console.log(process.argv[2]);