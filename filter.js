const numbers = [12, 34, 32, 23, 45, 62, 19, 34, 5, 10, 44];
const bigNumbers = numbers.filter(x => x > 20);
console.log(bigNumbers)
const tiny = numbers.filter(x => x < 15);
console.log(tiny);
const even = numbers.filter(num => num % 2 === 0);
console.log(even);

const products = [
    {id:1, name:'laptop', price: 45000},
    {id:2, name:'iphone', price: 80000},
    {id:3, name:'watch', price: 35000},
    {id:4, name:'teblet', price: 23000},
];

const luxaryProducts = products.filter(p => p.price > 40000);
console.log(luxaryProducts)