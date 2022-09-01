class Animal{
    motherOrgin = 'Animal'
    name;
    eat;
    sleep;
    constructor(name,eat, sleep){
        this.name = name;
        this.eat = eat;
        this.sleep = sleep;
    }
}
class Reptile extends Animal{
    subOrgin = 'Reptile';
    extra;
    constructor(name,eat, sleep, extra){
        super(name, eat, sleep);
        this.extra = extra;
    }
}
class Mammal extends Animal{
    subOrgin = 'mammal';
    provide;
    constructor(name,eat, sleep, provide){
        super(name,eat, sleep);
        this.provide = provide;
    }
}
class Human extends Animal{
    subOrgin = 'Human';
    doseSpeak;
    doseWalk;
    constructor(name, eat, sleep, doseSpeak, doseWalk){
        super(name, eat, sleep)
        this.doseSpeak = doseSpeak;
        this.doseWalk = doseWalk;
    }

}

const kalal = new Human('kalam', 'human food', 'home', true,true);
console.log(kalal)
const hektor = new Reptile('hektor', 'every animal flesh', 'water and earth','good swimer');
console.log(hektor)