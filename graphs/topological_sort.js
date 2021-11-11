
export function topologicalSort(graph){
    /* this function will compute one of the possible topological orderings
       of a given directed acyclic graph, in other words, topologically sorts a given graph */
    
    let visited = new Set(); // visited nodes will be stored here

    let topologicalOrdering = [];
    // this will store one of the possible topological orderings of a graph

    for(let node in graph){
        if ( !visited.has(node) ){
            // if this node is not visited, keep exploring
            let exploredNodes = []
            exploredNodes = depthFirstSearch(graph, node, visited, exploredNodes);
            
            /* for each node that has been explored
               show them in the topological order in reverse order */
            for( let explored of exploredNodes){
                topologicalOrdering.unshift(explored);
            }
        }
    }

    return topologicalOrdering;
}

function depthFirstSearch(graph, current, visited, exploredNodes){
    /* this recursive depth first search function will exploring new nodes
       in a depth first manner */
    
    visited.add(current);

    for ( let neighbor of graph[current]){
        /* for each neighbor, keep exploring */
        if( !visited.has(neighbor) ){
            // make sure that this neighbor is not visited
            exploredNodes = depthFirstSearch(graph, neighbor, visited, exploredNodes)
        }
    }

    exploredNodes.push(current); 
    // mark itself as explored but last, it means after having explored everyting first

    return exploredNodes;
}

export function buildGraph(edges){
    /* this function will build graph from a given edges list
        edges list represent an edge with directing only one direction */

    let graph = {};

    for (let edge of edges){
        
        let [from, to] = edge;

        if ( !( from in graph) ) graph[from] = []; // if "from" node doesn't exist currently
        if ( !(to in graph) ) graph[to] = []; // if "to" node doesn't exist currently

        graph[from].push(to); // now create the connection
    }

    return graph;
}
