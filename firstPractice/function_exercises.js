// This is the script to practice execution of functions in JS.

// Arrow Functions

// Without Parameters:
const generalGreeting = () => {console.log("Hi World!");};
generalGreeting();

// Simpler:
const generalGreetingV2 = () => "Hi Simpler World!";
console.log(generalGreetingV2());

// With parameters:
const specificGreeting = (name) => {console.log(`Hi ${name}`);};
specificGreeting("Peter");

// Now an IIFE (Immediately Invoked Function Expression) arrow function:
(() => console.log("Hi from an IIFE"))();
// I addded this, do I need to run "git add ." statement?
