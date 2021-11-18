/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
    let str = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    if (str == str.split("").reverse().join("")) {
        return true;
    } else {
        return false;
    }
}