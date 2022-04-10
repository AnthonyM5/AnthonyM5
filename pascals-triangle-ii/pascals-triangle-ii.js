/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = (rowIndex) => {
    if (rowIndex === 0) return [1]
    if (rowIndex === 1) return [1, 1]
    
    let row = [1, 1]
    
    for (let i = 2; i <= rowIndex; i++) {
        const start = [1]
        for (let j = 0; j < i - 1; j++) {
            start.push(row[j + 1] + row[j])
        }
        start.push(1)
        row = start
    }
    
    return row
};