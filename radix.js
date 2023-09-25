function getDigit(num, exponent){
    // Remove exponent # of digits from the right
    // in order to move up places: 1s => 10s => 100s ...
    while(exponent > 0){
        num = Math.floor(num / 10)
        exponent--;
    }
    return num % 10;
}

function digitCount(num){
    let count = 0;
    while(num > 0){
        num = Math.floor(num / 10)
        count++;
    }
    return count;
}

function mostDigits(arr){
    let max = arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return digitCount(max);
}


function radixSort(arr) {
    // Determine the max # of digits to deal with
    let max = mostDigits(arr)
    // Create buckets
    for (let exponent = 0; exponent < max; exponent++) {
        // Create an empty 1 x 10 2D-array
        const buckets = Array.from({ length: 10 }, () => []);
        // Place numbers in buckets for the exponent (10 ^ exponent)
        for (let i = 0; i < arr.length; i++) {
            const bucketIdx = getDigit(arr[i], exponent);
            buckets[bucketIdx].push(arr[i]);
        }
        // Flatten 2D array into a 1D-arary
        arr = [].concat(...buckets);
    }
    return arr;
}

module.exports = { radixSort, getDigit, digitCount, mostDigits };