/** 100% Result */
/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline()); // the number of temperatures to analyse
var inputs = readline().split(' ');
let minimumDist = 5526;
let minimumVal = 0;
console.error(inputs);
for (let i = 0; i < n; i++) {
    const t = parseInt(inputs[i]);// a temperature expressed as an integer ranging from -273 to 5526
    if (Math.abs(t) < minimumDist) {
        minimumDist = Math.abs(t);
        minimumVal = t;
    } else if (Math.abs(t) === minimumDist && t > minimumVal) {
        minimumVal = t;
    }
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(minimumVal);
