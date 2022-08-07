'use strict'

function strEdit(str) {
    let arr = str.split('\n');
    let res = '';
    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split(', ').reverse();
        if(i !== arr.length - 1) {
            res += arr[i].join(' ') + '\n';
        }
        else {
            res += arr[i].join(' ');
        }
    }
    return res;
}

//TEST
console.log('------------------Edit String with names------------------');
console.log(strEdit("Lennon, John\nMcCartney, Paul\nHarrison, George\nStar, Ringo"));
console.log('\n');