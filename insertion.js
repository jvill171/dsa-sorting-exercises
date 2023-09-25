function insertionSort(arr) {
    
    for (let i = 1; i < arr.length; i++) {

        let selectedElem = arr[i];
        let maxIdxRight = i - 1;

        while(maxIdxRight >= 0 && arr[maxIdxRight] > selectedElem) {
            arr[maxIdxRight + 1] = arr[maxIdxRight];
            maxIdxRight--;
        }
        arr[maxIdxRight + 1] = selectedElem;
    }
    return arr;
}

module.exports = insertionSort;