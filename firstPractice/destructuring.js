const numbers = [];
const obj = {
    firstNumber: 1,
    secondNumber: 2,
    thirdNumber: 10,
    fourthNumber: 5
};

// This needs to be reviewed, idk yet what can this be used for.
({ firstNumber: numbers[0], secondNumber: numbers[1] } = obj);
console.log(numbers);
console.log(obj);
// This statement destructure an object.
const {secondNumber , fourthNumber} = obj;
console.log(secondNumber, fourthNumber);

//  Example of one function using destructuring:
// It's curious that setting a variable outside the function, still can be used. 

const outsideVariable = 1000;

const compareNumbers = (obj) => {
    const {thirdNumber, fourthNumber} = obj;
    if (thirdNumber > fourthNumber){
        console.log(`${thirdNumber} is greater than ${fourthNumber}, and the ouside variable is ${outsideVariable}`);
    } else {
        const {firstNumber} = obj;
        console.log(`${fourthNumber} is greater than ${thirdNumber} and the first number is ${firstNumber}`);
    }
}
compareNumbers(obj);

// We can also destructure functions:
const consultName = () => {
    const name = "David";
    const getName = () => {
        return name;
    }
    return [name, getName()];
}

const [variableName, functionGetName] = consultName();
console.log(`${variableName}`);
console.log(`${functionGetName}`);

