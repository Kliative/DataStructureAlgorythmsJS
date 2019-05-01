function reverseWords(string){
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