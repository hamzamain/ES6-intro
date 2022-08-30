const numbers = [12, 34, 32, 23, 45, 62, 19, 34, 5, 10, 44];

const bigNumber = numbers.find(num => num < 40);
// console.log(bigNumber);

const fives = numbers.find(num => num % 5 === 0);
console.log(fives);

const products = [
    {id:1, name:'laptop', price: 65000},
    {id:2, name:'iphone', price: 80000},
    {id:3, name:'watch', price: 30000},
    {id:4, name:'teblet', price: 23000},
];

const chip = products.find(product => product.price < 40000);
// console.log(chip)