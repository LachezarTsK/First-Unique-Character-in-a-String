
const LETTERS_IN_ALPHABET = 26;
const ASCII_CODE_LOWERCASE_A = 97;
const frequency = new Array(LETTERS_IN_ALPHABET);

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {

    initializeArrayFrequency();
    recordFrequency(s);
    return indexFirstUniqueLettetr(s.length);
};

function initializeArrayFrequency() {
    for (let i = 0; i < LETTERS_IN_ALPHABET; i++) {
        frequency[i] = new Letter();
    }
}

/**
 * @param {string} s
 */
function recordFrequency(s) {
    let n = s.length - 1;
    for (let i = n; i >= 0; i--) {
        let index = s.codePointAt(i) - ASCII_CODE_LOWERCASE_A;
        frequency[index].frequency++;
        frequency[index].index = i;
    }
}

/**
 * @param {number} stringLength
 * @return {number}
 */
function indexFirstUniqueLettetr(stringLength) {
    let index = stringLength;
    for (let i = 0; i < LETTERS_IN_ALPHABET; i++) {
        if (frequency[i].frequency === 1) {
            index = Math.min(index, frequency[i].index);
        }
    }
    return index === stringLength ? -1 : index;
}

class Letter {

    frequency = 0;
    index = -1;
}
