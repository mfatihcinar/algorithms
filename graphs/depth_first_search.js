import { graphs } from './graphs.js'

export function depthFirstTraversal(graph, source){
    /* this function will traverse a given graph
       in a depth-first manner */
    let stack = [ source ];

    while(stack.length > 0){

        let current = stack.pop();
        console.log(current);

        for(let neighbor of graph[current]){
            stack.push(neighbor);
        }
    }
}


export function recursiveDepthFirstTraversal(graph, source){
    /* this function traverses on a given graph
        in a depth-first manner also recursively */
    
    console.log(source); /* first print this node */

    for(let neighbor of graph[source]){
        recursiveDepthFirstTraversal(graph, neighbor); 
        /* implicitly add its neighbors to stack */
    }
    /* base case */
}



/* Test Cases */
//depthFirstTraversal(graphs[0], "a")
//depthFirstTraversal(graphs[1], "a")
//recursiveDepthFirstTraversal(graphs[0],"a")
//recursiveDepthFirstTraversal(graphs[1],"a")
