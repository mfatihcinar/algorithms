import { graphs } from './graphs.js'

export function findNodesThatHasNoNeighbors(graph){
    /* this function finds the nodes that has no neighbors
       in a graph */
    
    let nodesWithNoNeighbors = [];

    for(let node in graph){
        if(graph[node].length === 0){
            nodesWithNoNeighbors.push(node);
        }
    }

    return nodesWithNoNeighbors;
}


/* Test Case */
//console.log(findNodesThatHasNoNeighbors(graphs[0]));
//console.log(findNodesThatHasNoNeighbors(graphs[1]));