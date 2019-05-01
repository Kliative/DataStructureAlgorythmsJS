function isPalindrome(string) {
    string = string.toLowerCase();
    var characterArr = string.split('');
    var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');

    var lettersArr = [];
    characterArr.forEach(char => {
        if (validCharacters.indexOf(char) > -1) {
            lettersArr.push(char);
        }
    });

    if (lettersArr.join('') === lettersArr.reverse().join('')) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome('Madam I\'m Adam'));