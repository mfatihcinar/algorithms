
import { topologicalSort } from './topological_sort.js';
import { buildGraph } from './topological_sort.js'

describe("Topological Sort", () => {

    describe("when given a graph represented as an adjacency list", () => {

        /* Case 1 */
        test("should sort a given graph in the topological order", () => {
            
            /* Given a graph that is represented as edges list */
            /* Convert it to adjancency-list format */

            const edges = [
                ['7','5'],
                ['7','6'],
                ['5','4'],
                ['5','2'],
                ['6','4'],
                ['6','3'],
                ['2','1'],
                ['3','1'],
                ['1','0']
            ];

            const graph = buildGraph(edges);

            const expectedTopSort = [
                '7', '6', '5',
                '4', '3', '2',
                '1', '0'
            ];

            expect(topologicalSort(graph)).toEqual(expectedTopSort);

        });

        /* Case 2 */
        test("should sort a given graph in the topological order", () => {
            
            /* Given a graph that is represented as edges list */
            /* Convert it to adjancency-list format */

            const edges = [
                ['0','1'],
                ['0','2'],
                ['1','2'],
                ['1','5'],
                ['2','3'],
                ['6','1'],
                ['6','5'],
                ['5','3'],
                ['5','4']
            ];

            const graph = buildGraph(edges);

            const expectedTopSort = [
                '6', '0', '1',
                '5', '4', '2',
                '3'
            ];

            expect(topologicalSort(graph)).toEqual(expectedTopSort);

        });

        /* Case 3 */
        test("should sort a given graph in the topological order", () => {
            
            /* Given a graph that is represented as edges list */
            /* Convert it to adjancency-list format */

            const edges = [ 
                ['3', '2'],
                ['2', '1'], 
                ['6', '5'], 
                ['5', '2'], 
                ['5', '4']
            ];

            const graph = buildGraph(edges);

            const expectedTopSort = [
                '6', '5', '4',
                '3', '2', '1'
            ];

            expect(topologicalSort(graph)).toEqual(expectedTopSort);

        });

        /* Case 4 */
        test("should sort a given graph in the topological order", () => {
            
            /* Given a graph that is represented as edges list */
            /* Convert it to adjancency-list format */

            const edges = [ 
                ['1', '4'],
                ['1', '2'],
                ['2', '3'],  
                ['4', '2'], 
                ['4', '6'], 
                ['4', '5'],
                ['5', '6'], 
            ];

            const graph = buildGraph(edges);

            const expectedTopSort = [
                '1', '4', '5',
                '6', '2', '3'
            ];
            
            expect(topologicalSort(graph)).toEqual(expectedTopSort);

        });
    })

})