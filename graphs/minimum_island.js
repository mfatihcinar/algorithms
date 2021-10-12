import { grids } from './graphs.js'

function minimumIsland(grid){
    /* this function computes the smallest island in a given grid graph */

    let smallest = Infinity;

    let visited = new Set();

    for(let r = 0; r < grid.length; r += 1){

        for(let c = 0; c < grid[r].length; c += 1){
            /* for each node in the grid graph */

            let size = explore(grid, r, c, visited);
            if( size < smallest && size !== 0 ) smallest = size;
        }
    }

    return smallest;
}

function explore(grid, row, col, visited){
    /* this function computes the size of a given node's island */

    const rowInbounds = 0 <= row && row < grid.length;
    const colInbounds = 0 <= col && col < grid[0].length;

    if( !rowInbounds || !colInbounds ){
        return 0;
    }

    if(grid[row][col] === 'W') return 0;

    const position = row + ',' + col;
    
    if(visited.has(position)) return 0;

    visited.add(position);

    let size = 1; /* count this node first, that is why 1 */
      
    /* Depth-First traversal */ 
    size += explore(grid, row - 1, col, visited);
    size += explore(grid, row + 1, col, visited);
    size += explore(grid, row, col -1, visited);
    size += explore(grid, row, col + 1, visited);

    return size;
}

console.log(grids[0]);

console.log(minimumIsland(grids[0]));

export default minimumIsland;