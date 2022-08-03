'use strict'

function substrCount(input, needle, offset = 0, length = input.length) {
    let substr = input.slice(offset).slice(0, length);
    let counter = 0;
    let regexp = /ll/g;
    let arr;

    while((arr = regexp.exec(substr)) !== null) {
        counter++;
    }
    return counter;
}

console.log('------------------SUBSTRING COUNT------------------');
console.log(substrCount('Good Golly Miss Molly', 'll', 7, 10)); // TEXT: 'lly Miss M' RES: 1
console.log(substrCount('Good Golly Miss Molly', 'll', 7, 44)); // TEXT: 'lly Miss Molly' RES: 2
console.log(substrCount('Good Golly Miss Molly Jelly', 'll')); // TEXT: 'Good Golly Miss Molly Jelly' RES: 3
console.log('\n');
