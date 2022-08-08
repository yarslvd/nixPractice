'use strict'

function isDateCorrect(str) {
    let regEx = /^(\d{1,2})\-(\d{1,2})\-(\d{1,4})$/;
    if(!regEx.test(str)) {
        return false;
    }

    let match = str.match(regEx);
    if(match) {
       if((match[1] > 1 && match[1] <= 31) && (match[2] > 1 && match[2] <= 12) && match[3] > 0) {
            return true;
       }
    }
    return false;
}

function parseDate(str) {
    let match = str.match(/^(\d{1,2})\-(\d{1,2})\-(\d{4})$/)
    let date, obj = {};
    if(match) {
        date = new Date(match[3], match[2] - 1, match[1]);
        date.getDate() <= 9 ? obj.date = '0' + date.getDate() : date.getDate();
        (date.getMonth() + 1) <= 9 ? obj.month = '0' + (date.getMonth() + 1) : date.getMonth() + 1;
        return [obj.date, obj.month, date.getFullYear()].join('-');
    }
    return -1;
}
//TEST
console.log('------------------RegExp Date------------------');
console.log(isDateCorrect('08-08-2020')); // true
console.log(isDateCorrect('34-12-2020')); // false
console.log('\n');