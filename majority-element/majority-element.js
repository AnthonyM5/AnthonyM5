/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
    let count = 0
    let curr = 0
    for(num of nums) {
        if(count == 0) curr = num
        count += num == curr ? 1 : -1
    }
    return curr
};