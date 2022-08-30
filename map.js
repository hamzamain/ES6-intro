const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const doubleIt = num => num * 2;
const doubledNumbers = numbers.map(doubleIt);
// console.log(doubledNumbers);
const tripleIt = num => num * 3;
const friends = [1, 2, 3, 4, 5, 5,6 ,7 ,8];
const tripled = friends.map(num => {
    const tripled = num * 3;
    const result = tripled + 5;
    return result;
});
// console.log(tripled)
const fiveTimes = [1, 2, 3, 4, 5, 6, 7, 8].map((a, b) => a * b);
console.log(fiveTimes)