import { edgesOne } from './graphs.js'

export function undirectedPath(edges, source, destination){
    // this function returns if there is a path from source to destination
    // in an undirected graph , implemented using Depth First Traversal using Stack

    let graph = buildGraph(edges); // convert into adjacency list 

    let stack = [ source ];

    let visited = new Set(); // create a visited set 

    while( stack.length > 0 ){

        let current = stack.pop();

        if( visited.has(current)) continue; // if visited, continue checking other items
        
        if( current === destination ) return true;

        visited.add(current); // now its visited

        for(let neighbor of graph[current]){
            stack.push(neighbor);
        }
    }

    return false;
}
/*
function hasPath(graph, source, destination, visited){

    if(source === destination) return true;
    
    if(visited.has(source)) return false; // if visited, signal this

    visited.add(source); // now its visited

    for(let neighbor of graph[source]){

        if( hasPath(graph, neighbor, destination, visited) === true ){
            return true;
        }

    }

    return false;
}

function undirectedPath(edges, source, destination){
    // this function returns if there is a path from source to destination
    // in an undirected graph, implemented using Depth First Traversal, recursive approach

    const graph = buildGraph(edges);
    
    return hasPath(graph, source, destination, new Set());
}
*/

export function buildGraph(edges){
    /* this function builds a graph in adjacency list format 
       from edge list format */
    
    let graph = {};

    for(let edge of edges){
        const [nodeOne, nodeTwo] = edge;

        if(!(nodeOne in graph)) graph[nodeOne] = [];
        if(!(nodeTwo in graph)) graph[nodeTwo] = [];
        
        graph[nodeOne].push(nodeTwo);
        graph[nodeTwo].push(nodeOne);
    }

    return graph;
}

//console.log(undirectedPath(edgesOne, 'j', 'm')); // true
//console.log(undirectedPath(edgesOne, 'm', 'j')); // true
console.log(undirectedPath(edgesOne, 'l', 'j')); // true