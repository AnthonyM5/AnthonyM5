/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const numerals = {I: 1, V : 5, X : 10, L : 50, C : 100, D : 500, M : 1000}
    let sum = 0;
    
    for (let i = 0; i < s.length; i++) {
        let firstNum = numerals[s[i]]
        let secondNum = numerals[s[i + 1]]
        if (secondNum > firstNum) {
            sum += secondNum - firstNum
            i++
        } else {
            sum += firstNum
        }
    }
    return sum
};