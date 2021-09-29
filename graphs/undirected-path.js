
function buildGraph(edges){
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