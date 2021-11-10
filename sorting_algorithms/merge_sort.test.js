
import mergeSort from './merge_sort.js'

describe("Merge Sort", () => {

    describe('when given a randomly generated array with randomly varying length', () => {
        test('should sort in ascending order', () => {
          
          let randomLength = Math.ceil(Math.random() * 20); // random number between 1-20
          let randomArray = [];
          
          // create a random array
          for( let i = 1; i <= randomLength; i++){
            let randomNumber = Math.floor(Math.random() * 101);
            randomArray.push();
          }
          
          let sorted = [...randomArray].sort( (first, second) => (first-second));
            
          expect(mergeSort(randomArray)).toEqual(sorted);
        });
      });

    describe("when given an array that is reversely sorted, i.e. sorted in descending order", () => {
        test('should sort in ascending order', () => {
          
            let randomLength = Math.ceil(Math.random() * 20); // random number between 1-20
            let randomArray = [];
            
            // create a random array
            for( let i = 1; i <= randomLength; i++){
              let randomNumber = Math.floor(Math.random() * 101);
              randomArray.push();
            }
            
            // sort this array in descending order
            let sorted = [...randomArray].sort( (first, second) => (second-first) );
              
            expect(mergeSort(randomArray)).toEqual(sorted);
          });
    })

    describe("when given an array that has all negative values", () => {
        test('should sort in ascending order', () => {
          
            let randomLength = Math.ceil(Math.random() * 20); // random number between 1 and 20
            let randomArray = [];
            
            // create a random array
            for( let i = 1; i <= randomLength; i++){
              let randomNumber = Math.floor(Math.random() * 101);
              randomNumber *= -1;
              randomArray.push(randomNumber);
            }
            
            let sorted = [...randomArray].sort( (first, second) => (first - second));
              
            expect(mergeSort(randomArray)).toEqual(sorted);
          
          });

    })

    describe("when given an array of the same value", () => {

        test('should return the same array', () => {
        
            let uniformArray = [0,0,0,0,0];

            expect(mergeSort(uniformArray).toString()).toEqual(uniformArray.toString());

        });
    })

    describe("when given an array of 100 million elements", () => {

        test("should make the sorting in log linear time", () => {

            /* Create an array of 100 million elements, that are sorted an ascending order
            from 1 - 100.000.000 */

            let array = [];

            const UPPER_LIMIT = 10000000;

            for( let x = UPPER_LIMIT; x <= UPPER_LIMIT && x >= 1; x--){
                array.push(x);
            }

            let then = Date.now();

            mergeSort(array);

            let now = Date.now();

            let timeElapsed = now - then; // time passed in miliseconds

            let threshold = 6000; // six seconds threshold

            expect(timeElapsed).toBeLessThan(threshold);
        });
    })
})