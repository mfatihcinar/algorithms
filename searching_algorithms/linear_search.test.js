
import linearSearch from './linear_search.js'

describe("Linear Search", () => {
    
    describe("when given a list of elements", () => {
        
        test("it should find the element correctly", () => {

            let array = [101, 109, 111, 127, 135, 140, 141, 157, 169, 173, 180, 185, 191];

            expect(linearSearch(array, 121)).toBe(-1);
            expect(linearSearch(array, 127)).toBe(3);
            expect(linearSearch(array, 157)).toBe(7);
            expect(linearSearch(array, 191)).toBe(array.length-1);
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
                
                expect(linearSearch( array, random )).toBe( random-1 );
            }

            /* Negative numbers, zero and the numbers larger than 10 million should not be found */
            // Generate 10 numbers of those kinds
            let outsiderNumbers = [-1011010101, -23491871, -231, -84, -9, 0 , 10000001, 110000001, 12345678]
            
            for(let number of outsiderNumbers){
                expect(linearSearch(array, number)).toBe(-1);
            }
            // they all must be generating -1
        });

        
    })
    
})