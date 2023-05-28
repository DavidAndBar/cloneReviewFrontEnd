const numbers = [];
const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 5
};

// This needs to be reviewed, idk yet what is this for.
({ a: numbers[0], b: numbers[1] } = obj);
console.log(numbers);
console.log(obj);
// This statement destructure an object.
const {b , d} = obj;
console.log(b, d);