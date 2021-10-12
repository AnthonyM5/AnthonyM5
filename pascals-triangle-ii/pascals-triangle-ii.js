/**
 * @param {number} rowIndex
 * @return {number[]}
 */

let getRow = (rowIndex) => {
    let rows = rowIndex;
    let result = new Array(rows + 1);
    result[0] = result[rows] = 1;
    
    for (let i = 1; i < rowIndex; i++, rows--) {
        result[i] = (result[i - 1] * rows) / i
    }
    return result;
};
