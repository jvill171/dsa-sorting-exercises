// Combines 2 arrays into 1 array, ensuring still in order from least to greatest
function merge(arr1, arr2) {
    let idx1 = 0;
    let idx2 = 0;
    let result = []

    // Push smallest item in either sorted array until one array is empty
    while(idx1 < arr1.length && idx2 < arr2.length){
        if( arr1[idx1] <= arr2[idx2] ){
            result.push( arr1[idx1] )
            idx1++;
        }else{
            result.push( arr2[idx2] )
            idx2++;
        }
    }
    // Push the rest of the remaining array into result
    if(idx1 < arr1.length){
        while(idx1 < arr1.length){
            result.push( arr1[idx1] )
            idx1++;
        }
    }
    if(idx2 < arr2.length){
        while(idx2 < arr2.length){
            result.push( arr2[idx2] )
            idx2++;
        }
    }
    return result;
}

function mergeSort(arr) {
    // arr of 1 or less elements is already sorted
    if(arr.length <= 1) return arr;

    // Get midpoint of array
    let midPoint = Math.floor(arr.length / 2)

    // Split array in 2 halves
    let left  = arr.slice(0, midPoint);
    let right = arr.slice(midPoint);

    // Recursively mergeSort()
    left  = mergeSort(left);
    right = mergeSort(right);

    // Start building sorted array
    return merge(left, right)
}

module.exports = { merge, mergeSort};