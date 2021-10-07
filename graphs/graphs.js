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

export const graphFour = {
    0: ["8", "1", "5"],
    1: ["0"],
    5: ["0", "8"],
    8: ["0", "5"],
    2: ["3", "4"],
    3: ["2", "4"],
    4: ["3", "2"]
  }


export const graphFive = {
    1: ["2"],
    2: ["1"],
    3: [],
    4: ["6"],
    5: ["6"],
    6: ["4","5","7","8"],
    7: ["6"],
    8: ["6"],
    9: []
}

/* Also compile all the graphs as array */
export const graphs = [graphOne, graphTwo, graphThree, graphFour, graphFive];


/* Graphs Represented as Edges List */

/* cyclic */
export const edgesOne = [
    ['i', 'j'],
    ['k', 'i'],
    ['j', 'k'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
];


export const edgesTwo = [
    ['b', 'a'],
    ['c', 'a'],
    ['b', 'c'],
    ['q', 'r'],
    ['q', 's'],
    ['q', 'u'],
    ['q', 't'],
];

/* Also compile all the graphs that are represented by edge list */
export const edges = [edgesOne, edgesTwo];