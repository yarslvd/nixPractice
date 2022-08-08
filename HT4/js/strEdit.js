'use strict'

function strEdit(str) {
    let regEx = /[!^(, )|!^\n]+/g;
    let arr = str.split(regEx);
    let res = '';
    for(let i = 0; i < arr.length; i += 2) {
        if(i !== arr.length - 1) {
            res += arr[i + 1];
            res += ' ' + arr[i] + '\n';
        }
    }
    return res;
}

//TEST
console.log('------------------Edit String with names------------------');
console.log(strEdit("Lennon, John\nMcCartney, Paul\nHarrison, George\nStar, Ringo"));
console.log('\n');