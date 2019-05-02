function maxChar(string) {
    const charMap = {};
    let max = 0;
    let maxChar = '';

    for (let char of string) {
        // HashMap.js Option 3
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }

    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;
}

module.exports = maxChar;