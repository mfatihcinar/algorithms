import { graphs } from './graphs.js'

function breadthFirstSearch(graph, source){
    /* this function will traverse a given graph
       in a breadth-first manner */
    
    let queue = [ source ];

    while(queue.length > 0){
        let current = queue.shift(); /* dequeue the first item in the queue */
        console.log(current); /* print this item */

        for(let neighbor of graph[current]){ 
            /* add each neighbor of this item into the queue */
            queue.push(neighbor);
        }
    }
}

/* Test Case */
//breadthFirstSearch(graphs[1], 'a');

export default breadthFirstSearch;