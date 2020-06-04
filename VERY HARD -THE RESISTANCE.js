/** 100% Result*/
/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
 const MorseCodeAZ = Object.freeze({
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y:"-.--",
    Z: "--.."
 });

const L = readline();
const N = parseInt(readline());
const morseWords = [];
console.error("Morse Code-String", L);

const convertWordtoMorse = (word) => {
  var morseWord = "";
  for (var i = 0; i < word.length; i++) {
    morseWord += MorseCodeAZ[word[i]];
  }
  return morseWord;
}


for (let i = 0; i < N; i++) {
    const W = convertWordtoMorse(readline());
    morseWords[i] = W;
}


var memo = {}; // memoization for fast recursion
const findCompleteMessage = (startIndex) => {
    let possible_message_count = 0;
    if (memo[startIndex]) {
        // console.error("ENTERED-M", morseWords[i], i);
        possible_message_count += memo[startIndex];
    } else {
        // console.error("ENTERED", morseWords[i], i);
        if (startIndex === L.length) {
            // console.error("Matched", startIndex);
            return 1;
        }
        const remainingL =  L.substring(startIndex);
        // console.error("RL", remainingL, startIndex);
        for (var i = 0; i < morseWords.length; i++) {
            // console.error("RL-MEM", morseWords[i], i);
            if (remainingL.startsWith(morseWords[i])) {
                // console.error("RL-MEM-GONE", morseWords[i], i);
                const newCount = findCompleteMessage(startIndex + morseWords[i].length);
                // console.error("New Count",newCount);
                possible_message_count +=  newCount;
            }
        }
    }
    memo[startIndex] = possible_message_count;
    return memo[startIndex];
}

const no_of_messages = findCompleteMessage(0);
// console.error("MENO MEMO MEMO",memo);

console.log(no_of_messages);


// Write an answer using console.log()
// To debug: console.error('Debug messages...')

// console.log(possible_message_count);
