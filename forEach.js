const products = [
    {id:1, name:'laptop', price: 45000},
    {id:2, name:'iphone', price: 80000},
    {id:3, name:'watch', price: 35000},
    {id:4, name:'teblet', price: 23000},
];

const friends = ['tom hanry', 'Tom Crus','Tom Pitersom', 'Tom dab'];

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const friendsAge = [1, 2, 3, 4, 5, 5,6 ,7 ,8];

const trying = friendsAge.forEach(f => {
    const doubled = f * 2;
    return doubled;
});

console.log(trying)