/**
 * Binary search, also known as half-interval search, logarithmic search, or binary chop, is a search algorithm that finds the position of a target value within a sorted array
 * Binary search compares the target value to the middle element of the array. 
 * If they are not equal, the half in which the target cannot lie is eliminated and the search continues on the remaining half, again taking the middle element to compare to the target value, and repeating this until the target value is found.
 * If the search ends with the remaining half being empty, the target is not in the array.
 */

 let arr = [5,8,16,23,43,56,76,123,456,765];
 let x = 76;

 function binarySearch(arr, x) {
    let start = 0;
    let end = arr.length -1;
    while (start<end) {
        let middle = Math.floor((start+end)/2);
        if (arr[middle] == x) {
            return middle;
        }
        if (arr[middle] < x) {
            start = middle+1;
        } else {
            end = middle-1;
        }
    }
 
    return -1;

 }

 console.log(binarySearch(arr, x))