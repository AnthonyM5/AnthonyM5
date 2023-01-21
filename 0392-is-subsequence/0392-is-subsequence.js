/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = (s, t) => {
    if (s.length > t.length) return false
    
    let idx = 0
    let jdx = 0
    while (idx < s.length && jdx < t.length) {
        if (s[idx] === t[jdx]) idx++
        jdx++
    }
    return idx === s.length
};