/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 0;
    for (let i = 0; i < nums.length -1; i++) {
        if (nums[i] !== nums[i + 1]) {
            k++
            nums[k] = nums[i + 1]
        }
    }
    return k + 1
};