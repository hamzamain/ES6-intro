const oddArray = [1, 3, 5, 7, 9];
const evenArray = oddArray.map(num => num + 1);
// console.log(evenArray);

const evenArrays = [];
for(const odd of oddArray){
    const even = odd + 1;
    evenArrays.push(even);
}
// console.log(evenArrays)
const num = [33, 50, 79, 78, 90, 101, 30];
const by10 = num.filter(num => num % 10 ===0);
// console.log(by10)

const finds =num.find(num => num % 10 === 0);
// console.log(finds)

const numbers = [1, 9, 17, 22];
const add = numbers.reduce((sum, num) => sum + num, 0);
// console.log(add)

let sum = 0;
for(const number of numbers){
    sum = sum + number;
}
// console.log(sum)

const peoples = [
    {name:'Mena', age: 20},
    {name:'Rina', age: 15},
    {name:'Suchorita', age: 22}, 
];

/* let ageArray = [];
for(const people of peoples){
    const age = people.age;
    ageArray.push(age);
} */

const ages =peoples.map(people => {
    return people.age;
})
// console.log(ages)
// console.log(ageArray)
const ageSum = ages.reduce((sum, age) => sum + age, 0);
// console.log(ageSum)

const student = {
    name: 'fredie',
    age: 26
}
// console.log(student.age)

let data = {
    location:[
        {
            latitude: '34.5, 37.8',
            longitude:'98.77, 58.7',
            city:'haidarabad',
            country:'India'
        }
    ]
}

// console.log(data.location[0].city);

/* jasonplace holder code */

const users = {
    user:{
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",
          zipcode: "92998-3874",
          geo: {
            lat: "-37.3159",
            lng: "81.1496"
          }
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        conmpany: {
          name: "Romaguera-Crona",
          catchprash: "Multi-layered client-server neural-net",
          bs: "harness real-time e-markets"
        }
      }
}
console.log(users.user.email);
console.log(users.user.address);
console.log(users.user.address.city);
console.log(users.user.address.geo.lat);
console.log(users.user.conmpany);
console.log(users.user.conmpany.name);