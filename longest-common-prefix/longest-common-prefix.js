/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let output = ""
    
    strs = strs.sort((a,b) => a.length - b.length)
    
    for (let i = 1; i <= strs[0].length; i++) {
        let temp = strs[0].substring(0,i)
        if (!strs.every((str) => str.substring(0,i) == temp)) {
            break
        }
        output = temp
    }
        return output 
};