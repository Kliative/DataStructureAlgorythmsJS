function reverseWords(string) {
    var wordsArr = string.split(' ');
    var reverseWordsArr = [];

    wordsArr.forEach(word => {
        var reversedWord = '';
        for (let i = word.length - 1; i >= 0; i--) {
            reversedWord += word[i];
        }

        reverseWordsArr.push(reversedWord);
    });

    return reverseWordsArr.join(' ');
}

console.log(reverseWords('this is a string of words'));

module.exports = reverseWords;

function reverse(str) {
    return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;

function reverse2(str) {
  return str
    .split('')
    .reverse()
    .join('');
}

module.exports = reverse2;

function reverse3(str) {
  let reversed = '';

  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;
}

module.exports = reverse3;