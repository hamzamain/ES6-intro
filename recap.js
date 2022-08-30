const a = {name:'sakib al hasan', pation:'crickter', salary:450000, kid:'2'}

const {name, ...b} = a;
const {kid} = b;

console.log(name, b, kid)

const [x, y, ...z] = [12, 32, 32, 33, 43, 43, 45];
console.log(z)
