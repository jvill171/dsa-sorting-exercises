function selectionSort(arr) {
    let currIdx = 0;

    while(currIdx < arr.length){
        let minIdx = currIdx;
        for(let i = currIdx; i < arr.length; i++){
            //Set new min if if arr[i] < arr[minIdx]
            if(arr[i] < arr[minIdx]) minIdx = i;
        }
        if(arr[currIdx] !== arr[minIdx]){
            // Swap if new minimum found
            [arr[currIdx], arr[minIdx]] = [arr[minIdx], arr[currIdx]]
        }
        currIdx++;
    }
    return arr;
}

module.exports = selectionSort;