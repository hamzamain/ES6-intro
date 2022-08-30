/* const max = Math.max(12, 98, 999, 76);
// console.log(max)
const numbers = [12, 'kala kala', 999, {name: 'kamrul hasan', id: 121}];
const lergest = Math.max(...numbers);
console.log(...numbers) */

/* const number0 = [1, 3, {name:'kamrul', brother:'tanvir', cousin:'towsif'}, 5, 6, 7, ['kala', 'rasel', 'shanto'], 9];
// console.log(number0)
const number1 = [12, 20, ...number0, 11];
number0.push(10);
number1.push(11, 2, 3)
console.log(number0);
console.log(number1);
 */
const arrayLikeObject = {name:'kamrul', brother:'tanvir', cousin:'towsif'};
const arrayLikeObject2 = {...arrayLikeObject};
console.log(arrayLikeObject2)