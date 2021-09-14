/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let result = 2;
    
    if (x === 0 || x === 1) return x;
    while(x){
        if (result * result > x) break
        result++
    }
    return result - 1
};