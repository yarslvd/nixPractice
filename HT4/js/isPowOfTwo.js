'use strict'

function isPowOfTwo(n){
    return (n && !(n & (n - 1)));
}

// TESTS
console.log('------------------Is Pow of Two?(Bitwise Operator)------------------');
console.log(isPowOfTwo(8)); //true
console.log(isPowOfTwo(16)); //true
console.log(isPowOfTwo(14)); //false
console.log('\n');