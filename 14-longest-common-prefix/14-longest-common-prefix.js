/**
 * @param {string[]} strs
 * @return {string}
 */
longestCommonPrefix = (strs) => {
    let prefix = "";
    const [start, words] = [strs[0], strs.slice(1)];
    
    for(const letter of start) {
        let currentPrefix = prefix + letter;
        for(const word of words) {
            if(!word.startsWith(currentPrefix))
                return prefix;
        }
        prefix = currentPrefix;    
    }
    return prefix;
};