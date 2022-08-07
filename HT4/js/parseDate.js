'use strict'

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
console.log(parseDate('08-08-2020')); // 08-08-2020
console.log(parseDate('7-13-2020')); // 07-01-2021
console.log('\n');