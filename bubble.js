function bubbleSort(arr) {

    for(let loops=0; loops < arr.length - 1; loops++){
        for(let idx=0; idx < arr.length - 1 - loops; idx++){
            if(arr[idx] > arr[idx+ 1]){
                let temp = arr[idx];
                arr[idx] = arr[idx + 1];
                arr[idx + 1] = temp;
            }
        }
    }
    return arr;
}

module.exports = bubbleSort;