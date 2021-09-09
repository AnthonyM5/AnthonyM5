/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let length = nums.length - 1;
    
    for (let i = length; i > -1; i--) {
        if (nums[i] === val) {
            nums[i] = nums[length--]
        }
    }
    return length + 1;
};