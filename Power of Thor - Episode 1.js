/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

var inputs = readline().split(' ');
const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
const initialTx = parseInt(inputs[2]); // Thor's starting X position
const initialTy = parseInt(inputs[3]); // Thor's starting Y position
let thorX = initialTx;
let thorY = initialTy;
// game loop
while (true) {
    const remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.

    // Write an action using console.log()
    // To debug: console.error('Debug messages...');
    const xdiff = thorX - lightX;
    const ydiff = thorY - lightY;
    let move = '';

    if (xdiff === 0) {
        if (ydiff < 0) {
            move = 'S';
            thorY += 1;
        } else {
            move = 'N'
            thorY -= 1;
        }
    } else if (ydiff === 0) {
        if (xdiff < 0) {
            move = 'E';
            thorX += 1;
        } else {
            move = 'W'
            thorX -= 1;
        }
    } else if (xdiff < 0 && ydiff < 0) {
        move = 'SE';
        thorX += 1; thorY += 1;
    } else if (xdiff > 0 && ydiff < 0) {
        move = 'SW';
        thorX -= 1; thorY += 1;
    } else if (xdiff > 0 && ydiff > 0) {
        move = 'NW';
        thorX -= 1; thorY -= 1;
    } else if (xdiff < 0 && ydiff > 0) {
        move = 'NE';
        thorX += 1; thorY -= 1;
    }


    // A single line providing the move to be made: N NE E SE S SW W or NW
    console.log(move);
}
