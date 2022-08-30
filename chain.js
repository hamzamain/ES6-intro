const users = [{id:121, name:'abul', job:'doctor'}];
// console.log(users[0].name);
const data ={
    count: 500,
    data:[
        {id:1, name:'kabul' , job: 'leader', address:{
            street:'35/2 kochukhet',
            building:'kismotali mention', 
            flor:'3rd flor'
        }},
        {id:2, name:'dabul' , job: 'follower'},
        {id:3, name:'habul' , job: 'follower'},
    ]
}
const address = data.data[0].address?.flor

console.log(address)