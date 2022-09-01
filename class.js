class Instructor {
    name;
    instructor = 'web devoloper'
    team = 'web devoloper team'
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    startSupportSation(time){
        console.log(`start the support sation at ${time}`)
    }
    creatQuize(time){
        console.log(`plese start quize at ${time}`)
    }
}

const amir = new Instructor('amir', 'bombai');
console.log(amir);
amir.startSupportSation('9:30');
amir.creatQuize(10);

const solaiman = new Instructor('solaiman khan', 'dhaka');
console.log(solaiman);


class Player{
    name = 'kaka'
    location = 'barselona'
    age = 15
    startPlaying(year){
        console.log(`${this.name} start playing ${year}`)
    }
    constructor(name, location, age){
        this.name = name;
        this.location = location;
        this.age = age;
    }
}

const cr7 = new Player('Crishtiano Ronaldo', 'portugal', 39);
// console.log(cr7)
cr7.startPlaying(15)

const footballKing = new Player('Messi', 'Argentina', 43);
// console.log(footballKing)
cr7.startPlaying(10)
function min(nums) { 
    return Math.min(nums) 
    }
    console.log(min( [1,3,2 ]))
    const {x, y, z} = {x: 1, y1: 2, z: 3};
    console.log(y)

    const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
console.log(output);
function a(nums){
    const output = [];
    for(const num of nums){
        if(num % 2){
            console.log(num);
            output.push(num)
        }
    }
    return output;
}
console.log(a(nums))

class Programmer {
name;
location;
constructor(name, location){
    this.name = name;
    this.location = location;
}
work(){
    console.log('im coding right now');
}

feedback(){
    console.log('that was awsome');
}
}

class WebDevoloper extends Programmer {
    work;
    constructor(work){
        this.work = work;
        super(name, location);
    }
}

const shakila = new Programmer('shakila', 'chittagong, Bangladesh', 'Data Check');
console.log(shakila)