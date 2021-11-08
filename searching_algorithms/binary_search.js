/*
    Time Complexity: Logarithmic O(log n)
    Space Complexity: O(1)
*/

function binarySearch(array, target, start, end){
    /* this function searches through a sorted array using binary search algorithm
       and returns the index of the target element that has been requested*/

    /* Base Condition - Not Found */
    if ( start > end ) return -1;

    let middle = Math.floor((start + end) / 2);

    if ( array[middle] === target ) return middle;
    
    else if ( target > array[middle] ) 
        return binarySearch(array, target, middle+1, end);
    
        else if ( target < array[middle] )
        return binarySearch(array, target, start, middle-1);

}

export default binarySearch;