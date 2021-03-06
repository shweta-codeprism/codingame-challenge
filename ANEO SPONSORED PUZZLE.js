/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const speed = parseInt(readline());
const lightCount = parseInt(readline());
const allDistance = [];
const allDuration = [];
let maxSpeed = speed;

const isGreenSignal = (cTime, aTime) => {
    console.error("C-GS", cTime);
    if (cTime <= aTime || Math.floor(cTime / aTime) % 2 === 0) {
        return true;
    }
    return false;
}

const findTheSpeed = () => {
    console.error("G-SPeed", maxSpeed);
    for (let i = 0; i < lightCount; i++) {
        const cTime = allDistance[i] * 18 / (maxSpeed * 5);
        if (isGreenSignal(cTime, allDuration[i])) continue;
        else {
            maxSpeed--;
            findTheSpeed();
        }
    }
}

for (let i = 0; i < lightCount; i++) {
    var inputs = readline().split(' ');
    const distance = parseInt(inputs[0]);
    allDistance.push(distance);
    const duration = parseInt(inputs[1]);
    allDuration.push(duration);
}


findTheSpeed();


console.log(maxSpeed);
