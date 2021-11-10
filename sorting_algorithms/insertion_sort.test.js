

import insertionSort from './insertion_sort.js'


describe("Insertion Sort", () => {

    describe('when given a randomly generated array with randomly varying length', () => {
        test('should sort in ascending order', () => {
          
          let randomLength = Math.ceil(Math.random() * 20); // random number between 1-20
          let randomArray = [];
          
          // create a random array
          for( let i = 1; i <= randomLength; i++){
            let randomNumber = Math.floor(Math.random() * 101);
            randomNumber *= -1;
            randomArray.push(randomNumber);
          }
          
          let sorted = [...randomArray].sort( (first, second) => (first - second));
            
          expect(insertionSort(randomArray)).toEqual(sorted);
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
            let sorted = [...randomArray].sort( (a,b) => (b-a) );
              
            expect(insertionSort(randomArray)).toEqual(sorted);
          });
    })

    describe("when given an array that has all negative values", () => {
        test('should sort in ascending order', () => {
          
            let randomLength = -1 * Math.ceil(Math.random() * 20); // random number between -1 and -20
            let randomArray = [];
            
            // create a random array
            for( let i = 1; i <= randomLength; i++){
              let randomNumber = Math.floor(Math.random() * 101);
              randomArray.push();
            }
            
            let sorted = [...randomArray].sort();
              
            expect(insertionSort(randomArray)).toEqual(sorted);
          });

    })

    describe("when given an array of the same value", () => {

        test('should return the same array', () => {
        
            let uniformArray = [0,0,0,0,0];

            expect(insertionSort(uniformArray)).toEqual(uniformArray);

        });
    })


})