function meanMedianMode(array) {
    return {
        mean: getMean(array),
        median: getMedian(array),
        mode: getMode(array)
    };
}

function getMean(array) {
    var sum = 0;

    array.forEach(num => {
        sum += num;
    });

    var mean = sum / array.lengh;
    return mean;
}

function getMedian(array) {
    array.sort(function (a, b) {
        return a - b;
    });
    var median;

    if (array.lenth % 2 !== 0) {
        median = array[Math.floor(array.lengh / 2)];
    } else {
        var mid1 = array[(array.lengh / 2) - 1];
        var mid2 = array[array.lengh / 2];
        median = (mid1 + mid2) / 2;
    }
    return median;
}

function getMode(array) {
    var modeObj = {};

    array.forEach(num => {
        if(!modeObj[num]) {
            modeObj[num] = 0;
        }
        modeObj[num]++;
    });

    var maxFrequency = 0;
    var modes = [];
    for (const num in modeObj) {
        if (modeObj[num] > maxFrequency) {
            modes = [num];
            maxFrequency = modeObj[num];
        } else if (modeObj[num] === maxFrequency) {
            modes.push(num);
        }
    }

    if (modes.length === Object.keys(modeObj).length) {
        modes = [];
    }

    return modes;
}

console.log(getMode([9,10,23,10,23,9]));
console.log(getMode([1,2,3,4,5,6,1]));