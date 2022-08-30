const fish = {
    name:'hilsha',
    age: '1', 
    color: 'silver',
    phone: '01763474858', 
    price: 4000
}
const name = fish.name;
const age = fish.age;
// console.log(name, age, color, phone, price)

const {color, phone, price} = fish;
      const array = [2, 3, 4, 5, 6, 7, 9];
      const [a, b, c, d, e, f, g] = array;
    //   console.log(g);
    const getName = () => ['alim', 'halim', 'kolim']
    const [baba, chacha, chele] = getName();
    console.log(chele)