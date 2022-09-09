/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = (s) => {
    let memo = {};
    let count = 0;
    
    for (let i of s) {
        memo[i] = (memo[i] || 0) + 1
    }
    
    
    for (let i in memo) {
        if (memo[i] % 2 === 0) {     
            count += memo[i];
        }else{
           count += memo[i] - 1;    
        }
    }
    
    return (s.length > count) ? count + 1 : count;   
};