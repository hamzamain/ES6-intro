const friends = ['tom hanry', 'Tom Crus','Tom Pitersom', 'Tom dab'];
const firstLetter = friends.map(f => f[0]);
// console.log(firstLetter);
const nameLength = friends.map(f => f.length);
// console.log(nameLength)
const max = Math.max(...nameLength);
// console.log(max)

const products = [
    {id:1, name:'laptop', price: 45000},
    {id:2, name:'iphone', price: 80000},
    {id:3, name:'watch', price: 35000},
    {id:4, name:'teblet', price: 23000},
];
const items = products.map(p => p.name);
console.log(items);
const price = products.map(p => p.price);
console.log(price)