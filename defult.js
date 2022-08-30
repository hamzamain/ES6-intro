/* function add(first, second){
    // if(second === undefined){
    //     second = 0;
    // }
    second = second || 0;
    const total = first + second;
    return total;
}
 */
function nums(num1 = '', num2 = ''){
    const fullName = num1 + ' ' + num2 ;
    return fullName;
}
const result = nums(10, 'haldar');
console.log(result)