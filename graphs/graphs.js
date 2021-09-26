/* This file contains graphs to work with graph algorithms */

/*
    Graph One
    a -> c
    |    |
    v    v
    b    e
    |
    v
    d <- f
*/
export const graphOne = {
    a: ['b','c'],
    b: ['d'],
    c: ['e'],
    d: [],
    e: [],
    f: ['d']
}


/*
    Graph Two
    ------> b -> c -----|
    |                   v  
    a----->  e  -> t -> d -> f
    |---> g -> k
*/

export const graphTwo = {
    a: ['b','e','g'],
    b: ['c'],
    c: ['d'],
    d: ['f'],
    e: ['t'],
    f: [],
    g: ['k'],
    t: ['d'],
    k: []
}

/* guaranteed acyclic */
export const graphThree = {
    f: ['g','i'],
    g: ['h'],
    h: [],
    i: ['k', 'g'],
    j: ['i'],
    k: []
}

/* Also compile all the graphs as array */
export const graphs = [graphOne, graphTwo, graphThree];