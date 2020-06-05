/** 100% Result */
/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
const W = parseInt(inputs[0]); // width of the building.
const H = parseInt(inputs[1]); // height of the building.
const N = parseInt(readline()); // maximum number of turns before game over.
var inputs = readline().split(' ');
const X0 = parseInt(inputs[0]);
const Y0 = parseInt(inputs[1]);
let bx = X0;
let by = Y0;
let xl = 0, xr = W - 1;
let yl = 0, yr = H - 1;


// game loop
while (true) {
    const bombDir = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)

    // Write an action using console.log()
    // To debug: console.error('Debug messages...');


    if (bombDir.includes('R')) {
        xl = bx + 1;
    }
    if (bombDir.includes('L')) {
        xr = bx - 1;
    }
    if (bombDir.includes('D')) {
        yl = by + 1;
    }
    if (bombDir.includes('U')) {
        yr = by - 1;
    }
   
     console.error(xl,",", xr, ",", yl,",", yr);

    bx = Math.floor((xl + xr) / 2);
    by = Math.floor((yl + yr) / 2);


    // the location of the next window Batman should jump to.
    console.log(`${bx} ${by}`);
}
