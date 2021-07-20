/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let upper = Math.pow(2,31) -1 
    let lower = -(Math.pow(2,31)-1)
    let reversed
    
    if (x < 0) {
         reversed = parseInt(x.toString().split("").reverse().join("")) * -1
    } else
         reversed = parseInt(x.toString().split("").reverse().join(""))
    
    return reversed <= upper && reversed >= lower ? reversed : 0
    
    
};