/*
    Time Complexity: logLinear O(nlogn)
    Space: O(1)
*/

function mergeSort(array){
    /* this function sorts a given array in the ascending order using the Merge Sort algorithm */

    /* Base Condition is if array has only one element it is already sorted */
    /* DIVIDE & CONQUER */
    if (array.length <= 1) return array;

    /* Divide the array into two halves and recursively divide, sort and merge them */
    let mid = Math.floor( array.length / 2 );

    let left = mergeSort(array.slice(0, mid));

    let right = mergeSort(array.slice(mid));

    return merge(left, right);
   
}

function merge(firstArray, secondArray){
    /* this function merges the given two arrays by sorting them in ascending order */

    let merged = []; // this will keep the merged array

    let one = 0, two = 0; // two pointers to iterate on the arrays

    while( one < firstArray.length && two < secondArray.length){
        /* Compare the elements that pointers point to, choose the smaller one */
        if(firstArray[one] <= secondArray[two]){
            merged.push(firstArray[one]);
            one++;
        }
        else{
            merged.push(secondArray[two]);
            two++;
        }
    }
    /* if there is still elements left in any one of the arrays
        just take them in order, since they are already sorted, since there must be only one array left */
    while( one < firstArray.length ){
        merged.push(firstArray[one]);
        one++;
    }

    while ( two < secondArray.length ){
        merged.push(secondArray[two]);
        two++;
    }

    return merged;
}

export default mergeSort;