/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = (matrix) => {
    const resultsArr = []
      while(matrix.length){
        const first = matrix.shift()
        resultsArr.push(...first)
        for(const m of matrix){
          let val = m.pop()
          if(val)
            resultsArr.push(val)
            m.reverse()   
        }
        matrix.reverse()
      }
      return resultsArr
};