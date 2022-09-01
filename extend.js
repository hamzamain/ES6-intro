class TeamMember{
    name;
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }

    provideFeedback(){
        console.log(`${this.name} thank you for your feedback`)
    }
}
class Instructor extends TeamMember{
    designetion = 'web cours Instructor'
    team = 'web team'
    constructor(name, location){
        super(name, location)
    }
    startSupportSation(time){
        console.log(`start the support sation at ${time}`)
    }
    creatQuize(modul){
        console.log(`plese start quize at ${modul}`)
    }
    
}
class Devoloper extends TeamMember {
    designetion = 'web cours Instructor'
    team = 'web team'
    tech;
    constructor(name, location, tech){
        super(name, location)
        this.tech = tech;
    }
    developFeture(feature){
        console.log(`plese debolop the ${feature}`)
    }
    relese(vertion){
        console.log(`plese relese the vertion ${vertion}`)
    }
    
}
class JobPlacement extends TeamMember {
    designetion = 'job placement comunddos'
    team = 'job placement'
    region;
    constructor(name, location, region){
        super(name,location)
        this.region = region;
    }
    provideResume(feature){
        console.log(`plese debolop the ${feature}`)
    }
    preperedStudent(vertion){
        console.log(`plese relese the vertion ${vertion}`)
    }
   
}
const alia = new Devoloper('alia bhut', 'Dhaka', 'React');
console.log(alia);
alia.provideFeedback();

const bipasha = new JobPlacement('Bipasha Boshu', 'Dilli', 'India');
console.log(bipasha);
bipasha.provideFeedback();