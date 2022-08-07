'use strict'

function findWord(str, target) {
    let arr = str.split(' ');

    for(let el of arr) {
        if(el.includes(target)) {
            if(el[el.length - 1] === ',' || el[el.length - 1] === '.') {
                return el.slice(0, el.length - 1);
            }
            return el;
        }
    }

    return -1;
}

//Find multiple matches

function findWords(str, target) {
    let arr = str.split(' ');
    let res = [];

    for(let el of arr) {
        if(el.includes(target)) {
            if(el[el.length - 1] === ',' || el[el.length - 1] === '.') {
                res.push(el.slice(0, el.length - 1));
            }
            else {
                res.push(el);
            }
        }
    }

    return res;
}

//TESTS
console.log('------------------Find word with substr------------------');
console.log(findWord('Ми знаємо, що монохромний колір – це градації сірого.', 'хром')); // монохромний
console.log(findWord('Ми знаємо, що монохромний колір – це градації сірого.', 'ємо')); // знаємо
console.log(findWord('Ми знаємо, що монохромний колір – це градації сірого.', 'ці')); // градації

//Multiple includes
console.log('****** Multiple findings ******');
console.log(findWords('Ми знаємо, що монохромний колір – це градації сірого.', 'ро')); // 'монохромний', 'сірого'
console.log(findWords('Ми знаємо, що монохромний колір – це градації сірого.', 'мо')); // 'знаємо', 'монохромний'
console.log('\n');