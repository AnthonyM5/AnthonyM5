/**
 * @param {number[][]} grid
 * @return {number[]}
 */
const findBall = (grid) => {
    let n = grid.length;
    if( n == 0 ) return [];
    let m = grid[0].length;
    let spots = new Array();
    let dist;
    
    for( i = 0; i < m; i++ ) {
        spots.push(i);
    }
    
    for( j = 0; j < n ; j++ ) {
        for( i in spots ) {
            x = spots[i];
            if( x == -1 ) continue;
            dist = grid[j][x];
            x += dist;
            if( x>=m || x<0 || grid[j][x] == -dist ) {
                spots[i] = -1;
            } else {
                spots[i] = x;
            }
        }
    }
    
    return spots;
};