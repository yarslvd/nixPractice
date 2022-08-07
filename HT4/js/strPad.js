'use strict'

function strPad(input, fullLen, fillStr, fillType = 'FILL_RIGHT') {
    switch(fillType) {
        case 'FILL_RIGHT':
            return input + addStr(fullLen - input.length, fillStr);
        case 'FILL_LEFT':
            return addStr(fullLen - input.length, fillStr) + input;
        case 'FILL_BOTH':
            return addStr(Math.floor((fullLen - input.length) / 2), fillStr) +
                input + addStr(Math.ceil((fullLen - input.length) / 2), fillStr);
    }

    function addStr(num, fillStr) {
        let str = '';
        for(let i = 0; i < num; i += fillStr.length) {
            str += fillStr;
        }
        return str.slice(0, num);
    }
}


//TESTS
console.log('------------------STR PAD------------------');
console.log(strPad('star', 10, '_*_')); // star_*__*_
console.log(strPad('star', 8, '_*_', 'FILL_LEFT' )); // _*__star
console.log(strPad('star', 8, '*', 'FILL_BOTH')); // **star**
console.log('\n');