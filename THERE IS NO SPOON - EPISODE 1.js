/** 100%  Result */
/**
 * Don't let the machines win. You are humanity's last hope...
 **/

const width = parseInt(readline()); // the number of cells on the X axis
const height = parseInt(readline()); // the number of cells on the Y axis
const allLines = [];
for (let i = 0; i < height; i++) {
    const line = readline(); // width characters, each either 0 or .
    allLines.push(line);
}
console.error(allLines);
// console.error(width, ",", height);

// Write an action using console.log()
// To debug: console.error('Debug messages...');
let lineIndex = 0;
let x1 = -1, y1 = -1, x2 = -1, y2 = -1, x3 = -1, y3 = -1;

const resetVals = () => {
    x1 = -1; y1 = -1; x2 = -1; y2 = -1; x3 = -1; y3 = -1;
}

const findNearestInRow = (rowInput, startIndex) => {
    for (let i = startIndex; i < width; i++) {
        if (rowInput[i] === '0') {
            return i;
        }
    }
    return -1;
}

const findNearestInColumn = (startLineIndex, col) => {
    for (let i = startLineIndex; i < height; i++) {
        if (allLines[i][col] === '0') {
            return i;
        }
    }
    return -1;
}

for (let row = 0; row < height; row += 1, lineIndex += 1) {
    const line = allLines[row];
    for (let col = 0; col < line.length; col++) {
        if (line[col] === '0') {
            x1 = col; y1 = row;
            const nearestRight = findNearestInRow(line, col + 1);
            if (nearestRight !== -1) {
                x2 = nearestRight; y2 = row;
            }
            const nearestBottom = findNearestInColumn(lineIndex + 1, col);
            if (nearestBottom !== -1) {
                x3 = col; y3 = nearestBottom;
            }
            console.log(`${x1} ${y1} ${x2} ${y2} ${x3} ${y3}`);
            resetVals();
        }
    }
}

// Three coordinates: a node, its right neighbor, its bottom neighbor
// console.log('0 0 1 0 0 1');
