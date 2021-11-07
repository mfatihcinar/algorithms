
function insertionSort(array) {
	/* sorts a given array using the famous insertion sort algorithm */
  	
  	for ( let elem = 1 ; elem < array.length ; elem++ ){
    	let current = array[elem]; 
      	
      	// find the right place for the current element
      	let prev;
      	for( prev = elem-1 ; prev >= 0 && array[prev] > current ; prev-- ){
          	// starting from the current element, compare with the previous ones
        	array[prev+1] = array[prev] // shift the greater element up one place
        }
      
      	// the right place is j+1th index, "insert" current into there
      	array[ prev+1 ] = current;
    }
  	
  	return array;  
}

export default insertionSort;
