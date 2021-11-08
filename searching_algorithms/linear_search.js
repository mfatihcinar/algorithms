
/*
    Time Complexity: Linear O(n)
    Space: O(1)
*/

function linearSearch( array, target ){
    /* this function searches the target element in an array using Linear Search Algorithm */

    for(let i = 0; i < array.length; i++){
        // for each index in the array

        if(array[i] === target) return i;
    }
    
    return -1; /* Not Found */
}

export default linearSearch;