const multiline = 'hello \n' +
 'world \n' + 
 'welcome \n';
//  console.log(multiline)

 /* const multilineBackTic = `hello 
 world 
 how are 
 you`
 console.log(multilineBackTic) */
 const a = 10;
 const b = 20;
 const summary = 'summary of: '  +  a  + ' and ' + b + ' is ' + (a + b);
 const newSummary = `summary of ${a} and ${b} is ${a+b}`
//  console.log(summary, newSummary)
// const strings = ''hello','world'';
const strings = `${a} is a and ${b} is b and sum of a and b is ${a + b}`;
console.log(strings)