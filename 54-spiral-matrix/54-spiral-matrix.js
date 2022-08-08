/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = (matrix) => {
    const result = [];
    
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let i = 0, j = 0;
    let dir = 0;
    
    const redirect = (i, j) => {
        const newI = i + directions[dir][0];
        const newJ = j + directions[dir][1];
        return newI < 0 || newI >= matrix.length || newJ < 0 || newJ >= matrix[i].length || matrix[newI][newJ] > 100;
    }
    while (result.length < matrix.length * matrix[0].length) {
        result.push(matrix[i][j]);
        matrix[i][j] = 101;
        if (redirect(i, j)) dir = (dir + 1) % directions.length;
        i += directions[dir][0];
        j += directions[dir][1];
    }
    return result;
};