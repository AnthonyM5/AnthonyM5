/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
 return [...new Set(nums)].length !== nums.length
};