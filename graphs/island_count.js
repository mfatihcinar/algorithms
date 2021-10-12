import { grids } from './graphs.js'

function islandCount(grid){
    /* this function computes the islands in a given grid graph */

    let count = 0;

    let visited = new Set();

    for(let r = 0; r < grid.length; r += 1){
        
        for(let c = 0; c < grid[r].length; c += 1){
            /* for each node in this grid graph */
            if( explore(grid, r, c, visited) === true) count += 1;
        }
    }

    return count;
}

function explore(grid, row, col, visited){
    /* this function explores the land in a given graph in a recursive manner */

    const rowInbounds = 0 <= row && row < grid.length;
    const colInbounds = 0 <= col && col < grid[0].length;
    
    if(!rowInbounds || !colInbounds) return false;

    if(grid[row][col] === 'W') return false;

    let position = row + ',' + col;

    /* if this node is visited,  it is not new island */
    if(visited.has(position)) return false;

    visited.add(position);

    /* depth-first traversal logic, explore its neighbors */
    explore(grid, row, col - 1, visited);
    explore(grid, row, col + 1, visited);
    explore(grid, row - 1, col, visited);
    explore(grid, row + 1, col, visited);

    return true; /* explored brand new island */
    
}


export default islandCount;