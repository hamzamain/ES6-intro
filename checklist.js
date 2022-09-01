const father = 'shofiqul islam';
const myName = 'mainuddin'
let myAge = '22';
const friend ={
    name:'mehedi hasan hawladar',
    fatherName:'nasir hawladar',
    brother:'alamin howladar',
    age:'19',
    city:'chittogram'
}
const aboutMe = `
my name is ${myName} and i am ${myAge} year old. My father's name ${father}.My best friend is ${friend.name} and he is ${friend.age} year old. he live in ${friend.city};
`
// console.log(aboutMe)
const fivetimes = num => num * 5;
// console.log(fivetimes(15))
const twoPera = (n1, n2) => {
    const with2n1 = n1 + 2;
    const with2n2 = n2 + 2;
    const multi = with2n1 * with2n2;
    return multi;
}
// console.log(twoPera(8, 6))

const threeMulty = (n, n1, n2) => n * n1 * n2;
// console.log(threeMulty(1, 2, 3))

const twoPera2 =(a, b) => (a + 2) * (b + 2);
// console.log(twoPera2(10, 20))

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const fivetimes2 = nums.map(num => num  * 5);
// console.log(fivetimes2)

const odd = nums.filter(num => num % 2 !== 0);
// console.log(odd)

const objects = [
    {name:'iphone', price:120000},
    {name:'mackbook', price:190000},
    {name:'ipad', price:70000},
    {name:'iphone case', price:500}
];
const finds = objects.find(product => product.price === 500);
// console.log(finds)

/* summay of array map, filter, find, forEach

map: map apply to an Array and apply a function or formula to every single element of an Array and make a brand new Array and put modified element of previous Array and return the brand new Array;

for each: for each do exectly same like map but do not return any thing exept undifined;

filter : filter take an Array and loop let go all element of that by a condition bariar; if condition is true then the element will place in a brand new Array and return the Array;

find: find do like filter dose but it do not return any Array . it return the first element of the Array;
*/

const {name, fatherName, brother, age, city} = friend;
// console.log(name, fatherName, brother, age, city)

const three = (a, b, c = 7) => a + b + c;
// console.log(three(12, 11))

const [a, b, ...c] = [12, 13, 14, 15, 25, 13]
console.log(c)