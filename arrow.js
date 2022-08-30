//function diclaration
function add0(first, second){
    const total = first + second;
    return total;
}


//function expretion
const sum = function (num1, num2){
    const total =  num1 + num2;
    return total;
}


// arrow function
const sum2 = (num1 ,num2) => num1 + num2;

const result = sum2(10, 50);
// console.log(result)
const add = () => console.log('hello world');
add()