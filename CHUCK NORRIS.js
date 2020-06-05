/**100% Success */
/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const MESSAGE = readline();

// Write an answer using console.log()
// To debug: console.error('Debug messages...');
const BINARY_CODE = [];
let BINARY_CODE_IDX = 0;
let prevChar = '';

//console.error(MESSAGE);
// console.error(MESSAGE.split('').map(char => char.charCodeAt(0).toString(2)));

MESSAGE.split('').forEach(char => {
    let bc = char.charCodeAt(0).toString(2);
    if (bc.length !== 7) {
        bc = '0' + bc;
    }
    bc.split('').forEach(bcchar => {
        if (prevChar === '') {
            BINARY_CODE[BINARY_CODE_IDX] = bcchar;
        } else if (bcchar === prevChar) {
            BINARY_CODE[BINARY_CODE_IDX] += bcchar;
        } else {
            BINARY_CODE_IDX++;
            BINARY_CODE[BINARY_CODE_IDX] = bcchar;
        }
        prevChar = bcchar;
    })
});

console.error("BINARY", BINARY_CODE, BINARY_CODE.length);

let CNCode = '';

const generateCNCode = (startIndex) => {
    const bcPart = BINARY_CODE[startIndex];
    const length = bcPart.length;
    if (startIndex !== 0) {
        CNCode += ' ';
    }
    if (bcPart.startsWith('1')) {
        CNCode += '0'
    } else {
        CNCode += '00'
    }
    CNCode += ' ' + '0'.repeat(length);
    if (startIndex !== BINARY_CODE.length - 1) {
        generateCNCode(startIndex + 1);
    }
}
generateCNCode(0);

console.error("CNCODE", CNCode);

console.log(CNCode);
