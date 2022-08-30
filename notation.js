const fish = {
    name:'hilsha',
    age: '1', 
    color: 'silver',
    phone: '01763474858', 
    price: 4000,
    marks:{
        math: 78,
        chemistry: 85,
        physice: 75,
    }
}
/* dot notation */
const marks = fish.marks;
const math = fish?.marks?.math;   
console.log(math)

/* brackat notation */
const chemistry = fish['marks']['chemistry'];
console.log(chemistry)