// RegEx string.replace().toLowerCase();

//Option 2 Easier
function anagrams(stringA, stringB) {
   return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
    return str.replace('/[^\w]g', '').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;

// Option 2
// function anagrams(stringA, stringB) {
//     const aCharMap = buildCharMap(stringA);
//     const bCharMap = buildCharMap(stringB);

//     if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//         return false;
//     }

//     for (const char in aCharMap) {
//         if (aCharMap[char] !== bCharMap[char]) {
//             return false;
//         }
//     }

//     return true;
// }

// function buildCharMap(str) {
//     const charMap = {};

//     for (const char of str.replace('/[^\w]g', '').toLowerCase()) {
//         charMap[char] = charMap[char] + 1 || 1;
//     }

//     return charMap;
// }