/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length == 0) return 0
    if (needle && haystack.includes(needle)) {
        let index = haystack.split(needle)
        return index[0].length
    }
    if (!haystack.includes(needle)) return -1
};