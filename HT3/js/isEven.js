'use strict'

function isEven(num) {
    return num & 1 ? false : true;
}

console.log('------------------IS EVEN?------------------');
console.log(isEven(4));
console.log(isEven(5));
console.log(isEven(1997));
console.log('\n');