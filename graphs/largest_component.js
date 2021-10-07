import { graphs } from './graphs.js'

function largestComponent(graph){
    /* this function computes the largest component in a graph */

    let largest = 0;

    let visited = new Set(); /* remember visited nodes */

    for(let node in graph){
        
        let size = explore(graph, node, visited);
        
        if( size >= largest ) largest = size;
        
    }

    return largest;
}

function explore(graph, current, visited){

    if(visited.has(current)) return 0;

    visited.add(current);
    
    let size = 1;

    for(let neighbor of graph[current]){
        size += explore(graph, neighbor, visited);
    }
    
    return size;
}

export default largestComponent;

/* Test Cases */
/*
console.log("Graph Five: ", largestComponent(graphs[4]));
*/