function twoSum(numArray, sum){
    var pairs = [];
    var hashtable = [];

    for (let i = 0; i < numArray.length; i++) {
        var currNum = numArray[i];
        
        var counterpart = sum - currNum;
        if (hashtable.indexOf(counterpart) !== -1){
            pairs.push([currNum, counterpart])
        }
        hashtable.push(currNum);
    }

    return pairs;
}

console.log(twoSum([1,6,4,5,3,3],7));