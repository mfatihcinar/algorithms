import { graphs } from './graphs.js' 

function connectedComponentsCount(graph){
    /* this function will compute the number of seperate
        connected components */
        
    let count = 0;

    let visited = new Set(); // visited nodes will be stored in a set

    for(let node in graph){
        if(explore(graph, node, visited) === true) count += 1;
    }

    return count;
}

function explore(graph, current, visited){
    /* this function explored new nodes using depth-first traversal */
    
    if(visited.has(current)) return false; 
    /* this means that this node has been counted before in an island (component) */

    visited.add(current);
    /* add this node to the visited nodes */

    for(let neighbor of graph[current]){
        explore(graph, neighbor, visited);
    }

    return true;
}

export default connectedComponentsCount;


/*
{
    0: ["8", "1", "5"],
    1: ["0"],
    5: ["0", "8"],
    8: ["0", "5"],
    2: ["3", "4"],
    3: ["2", "4"],
    4: ["3", "2"]
}
*/

/* Test Case */
/*
console.log(connectedComponentsCount(graphs[3]));
*/