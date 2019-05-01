function caesarCipher(str, num){
    // returns a number within the range
    num = num % 26;

    var lowerCaseString = str.toLowerCase();
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var newString = '';

    for (let i = 0; i < lowerCaseString.length; i++) {
        var currentLetter = lowerCaseString[i];
        if (currentLetter === ' ') {
            newString += currentLetter;
            continue;
        }
        var currentLetter = alphabet.indexOf(currentLetter);
        var newIndex = currentLetter + num;

        if (newIndex > 25) {
            newIndex = newIndex -26;
        }

        if (newIndex < 0) {
            newIndex = 26 + newIndex;
        }
        // makes new sentence with an upper case
        if (str[i] === str[i].toUpperCase()) {
            newString += alphabet[newIndex].toUpperCase();
        }

        newString += alphabet[newIndex];
    }
    return newString;
}

console.log(caesarCipher('Zoo Keeper',2));
console.log(caesarCipher('Big Car',-16));
console.log(caesarCipher('Javascript',-900));

