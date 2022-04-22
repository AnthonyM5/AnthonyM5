/**
 * @param {string} columnTitle
 * @return {number}
 */
const titleToNumber = (columnTitle) => {
    let temp = 0
    for(let char of columnTitle){
        temp = (temp*26) + (char.charCodeAt(0) - 65) + 1
    }
    return temp
};