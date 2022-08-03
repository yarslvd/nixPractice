'use strict'

function testString(str) {
    let arr = str.split('');
    let normalized = arr.filter(p => p === '(' || p === ')' || p === '[' || p === ']');

    let res = [];
    let check = {
        ')': '(',
        ']': '['
    }
    for(let char of normalized) {
        if(!check[char]) {
            res.push(char);
        }
        else {
            let el = res.pop();
            if (el !== check[char]) {
                return false;
            }
        }
    }
    return true;
}

console.log('------------------TEST STRING------------------');
console.log(testString('isu([syvstc]ts(crs))cs')); // true
console.log(testString('isu[syv(stc]ts(crs))cs')); // false
console.log(testString('sefse()dsd[[()sdasd]wadw]()')); // true;
console.log('\n');