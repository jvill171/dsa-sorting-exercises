/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, start = 0, end = arr.length - 1){
    
    let pivotVal = arr[start];
    let pivotIdx = start;

    for(let i = start + 1; i <= end; i++){
        if(arr[i] < pivotVal){
            pivotIdx++;
            [arr[i], arr[pivotIdx]] = [arr[pivotIdx], arr[i]]
        }
    }

    // Swap first item and pivot
    [ arr[start], arr[pivotIdx] ] = [ arr[pivotIdx], arr[start] ]

    return pivotIdx;
}

/*
quickSort accepts an array, left index, and right index
*/
function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        // Partition the array using the pivot function
        const pivotIndex = pivot(arr, left, right);

        // Recursively sort the sub-arrays to the left and right of the pivot
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

module.exports = {pivot, quickSort};


//pivot EXAMPLE
/**
 * Unchanging: pV, s, e
 * (pivotVal, start, end)
 *  pV
 *  s                  e
 * [7, 8, 1, 5, 6, 2, 55]'
 * ===============================================
 * ENTER FOR LOOP
 * ===============================================
 *  pI
 *     i 
 * [7, 8, 1, 5, 6, 2, 55]
 * ----------------------------
 *  pI++
 *        i 
 * [7, 8, 1, 5, 6, 2, 55]
 *     pI
 *        i
 *     X  X   
 * [7, 8, 1, 5, 6, 2, 55] => [7, 1, 8, 5, 6, 2, 55]
 * ----------------------------
 *     pI++
 *           i
 * [7, 1, 8, 5, 6, 2, 55]
 *        pI
 *           i
 *        X  X
 * [7, 1, 8, 5, 6, 2, 55] => [7, 1, 5, 8, 6, 2, 55] 
 * ----------------------------
 *        pI++
 *              i
 * [7, 1, 5, 8, 6, 2, 55]
 *           pI
 *              i
 *           X  X
 * [7, 1, 5, 8, 6, 2, 55] => [7, 1, 5, 6, 8, 2, 55] 
 * ----------------------------
 *           pI++
 *                 i
 * [7, 1, 5, 6, 8, 2, 55] 
 *              pI
 *                 i
 *              X  X
 * [7, 1, 5, 6, 8, 2, 55] => [7, 1, 5, 6, 2, 8, 55]
 * ----------------------------
 *              pI
 *                    i
 * [7, 1, 5, 6, 2, 8, 55]
 * ===============================================
 * EXIT FOR LOOP
 * ===============================================
 *              pI
 *  X           X
 * [7, 1, 5, 6, 2, 8, 55] => [2, 1, 5, 6, 7, 8, 55]
 * 
 * FINAL MUTATED ARR = [2, 1, 5, 6, 7, 8, 55]
 * pivotIdx = 4 //RETURNED BY PIVOT
 * pivotVal = 7
 */