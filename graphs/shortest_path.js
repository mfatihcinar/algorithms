import { edges } from './graphs.js'

function shortestPath( edges, nodeA, nodeB ) {
    /* this function computes the shortest path between Node A and Node B
        using Breadth First Search
    */
    
    const graph = buildGraph(edges);
    
    let visited = new Set( [ nodeA ] );

    let queue = [ [nodeA,0] ];

    while( queue.length > 0 ){
        
        let [node, distance] = queue.shift();
        
        if(node === nodeB) return distance;

        for(let neighbor of graph[node]){
            if( !visited.has(neighbor) ){
                // if its neighbor is not visited
                visited.add(neighbor);
                queue.push([neighbor, distance + 1]);
            } 
        }
    }

    return -1;
}

function buildGraph(edges){
    /* this function builds graph from given edges list */
    
    let graph = {};

    for(let edge of edges){

        let [nodeOne, nodeTwo] = edge;

        if(!(nodeOne in graph)) graph[nodeOne] = [];
        if(!(nodeTwo in graph)) graph[nodeTwo] = [];

        graph[nodeOne].push(nodeTwo);
        graph[nodeTwo].push(nodeOne);
   
    }

    return graph;
}

/* Test Cases */
/*
    console.log(shortestPath(edges[2], 'z', 'x'));
*/