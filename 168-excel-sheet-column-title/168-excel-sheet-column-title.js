/**
 * @param {number} columnNumber
 * @return {string}
 */
const convertToTitle = (columnNumber) => {
    let result = ""
    
    while (columnNumber > 0) {
        let idx = columnNumber % 26 
        let digit = parseInt(columnNumber / 26)
        
        if (idx === 0) {
            idx = 26
            digit--
        }
        
        result = String.fromCharCode(64 + idx) + result;
        columnNumber = digit
    }
    
    return result
};

