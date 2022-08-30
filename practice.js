const multiplying = (A = 1, B = 1, C = 1) => A * B * C;
const result0 = multiplying(10, 11, 22);
// console.log(result0)
const myTalk = `
I am a web devoloper.
I love to code.
I love to eat biriyani.
` 
// console.log(myTalk)

const sum = (a = 0, b = 0) => a + b;
const result1 = sum(10);
// console.log(result1)

const friends = ['abul', 'babul', 'kabul', 'dabul', 'habul', 'chabul'];

const frndPusher = (array)=>{
    const evenFrnds = [];
    for(const friend of array){
        if(friend.length % 2 === 0){
            evenFrnds.push(friend)
        }
    }
    return evenFrnds;
}

const result3 = frndPusher(friends);
// console.log(result3)

const numbers1 = [1, 3, 5, 7, 9, 11];

const math = (array) => {
    let sum = 0;
    for(const number of array){
        const squared = Math.pow(number, 2);
        sum = sum + squared;
    }
    const avarege = sum / array.length;
    return avarege;
}

const result4 = math(numbers1);
// console.log(result4);

const numbers2 =[3, 45, 6, 65, 77, 452, 445, 334 ,44545];

const twoArrayFuc = (array1, array2) =>{
    const newArray = [...array1,...array2];
    const max = parseFloat(Math.min(...newArray));
    const min = parseFloat(Math.max(...newArray));
    return [ max, min];
}

const result5 = twoArrayFuc(numbers1, numbers2);
console.log(result5)