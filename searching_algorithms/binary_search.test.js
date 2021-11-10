
import binarySearch from './binary_search.js'

describe("Binary Search", () => {
    
    describe("when given a list of elements", () => {
        
        test("it should find the element correctly", () => {

            let array = [101, 109, 111, 127, 135, 140, 141, 157, 169, 173, 180, 185, 191];

            expect(binarySearch(array, 121, 0, array.length - 1)).toBe(-1);
            expect(binarySearch(array, 127, 0, array.length - 1)).toBe(3);
            expect(binarySearch(array, 157, 0, array.length - 1)).toBe(7);
            expect(binarySearch(array, 191, 0, array.length - 1)).toBe(array.length-1);
        })

        test("it should find the element correctly in a large array", () => {

            /* Create an array of 10 million elements, that are sorted an ascending order
            from 1 - 10.000.000 */

            let array = [];

            const UPPER_LIMIT = 10000000;

            for( let x = 1; x <= UPPER_LIMIT; x++){
                array.push(x);
            }
            

            const numberTrials = 14; /* try 14 times */
            /* Choose 14 random numbers in the array and test binary search */
            for ( let i = 1; i <= numberTrials; i++){
                
                // generate a random number which is between 1 - UPPER LIMIT
                // which is guaranteed to be in the array
                // and since you know its index, you can test
                let random = Math.ceil(Math.random() * UPPER_LIMIT);
                
                expect(binarySearch(array, random, 0, array.length-1 )).toBe(random-1);
            }

            /* Negative numbers, zero and the numbers larger than 10 million should not be found */
            // Generate 10 numbers of those kinds
            let outsiderNumbers = [-1011010101, -23491871, -231, -84, -9, 0 , 10000001, 110000001, 12345678]
            
            for(let number of outsiderNumbers){
                expect(binarySearch(array, number, 0, array.length-1)).toBe(-1);
            }
            // they all must be generating -1
        });

        
    })
    

    describe("when given a list of tens of millions of elements", () => {

        test("it should execute in a logaritmic time", () => {

            /* Create an array of ten million elements */

            let array = [];

            let MAXIMUM = 200; // maximum random number can be 200
            let NUMBER_OF_ELEMENTS = 10000000 ; // an array of 10 million elements

            for(let i = 1; i <= NUMBER_OF_ELEMENTS; i++){
                
                let random = Math.ceil(Math.random() * MAXIMUM); // generate numbers between 1 - 200
                array.push(random);
            }

            /* Sort the array in order binary search algorithm to work */

            array.sort((first, second) => (second - first));

            let then = Date.now();

            let randomTarget = Math.ceil(Math.random() * 100000);

            let result = binarySearch(array, randomTarget , 0, array.length - 1);

            let now = Date.now();

            let timeElapsed = now - then; // time passed in miliseconds

            let threshold = 1;

            expect(timeElapsed).toBeLessThan(threshold);
        });
    })
})

