// Iterative
function vowelsI(str) {
    let count = 0;
    const checker = ['a','e','i','o','u',];
    // const checker = "aeiou";

    for (let char of str.toLowerCase()) {
        if (checker.includes(char)) {
            count++;
        }    
    }
    return count;
}
// Regex
function vowels(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

module.exports = vowels;