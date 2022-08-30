const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const total = numbers.reduce((previous, current) => {
    // console.log(previous , current);
    return previous * current;
}, 1);
// console.log(total);

const numTotal = numbers.reduce((sum = 0, arrayNum) => sum + arrayNum);
console.log(numTotal);