const add = (a, b, c, d, e, f) => a + b + c + d + e + f;

const doubleIt = (num) => num * 2;
const tripleIt = num => num * 3;
const total = doubleIt(5) + tripleIt(10);
// console.log(total)

const arrowFunction = (x, y, z) => {
    const firstSum = x + y;
    const secondSum = y + z;
    const multiplying = firstSum * secondSum;
    const result = multiplying / 2;
    return result;
}

const samePeramiter = (a, b) => a + b;

const result = samePeramiter(3, 5);

const greet = (who) => `Hello, ${who} !!`
console.log(result, greet('Mainuddin'))
