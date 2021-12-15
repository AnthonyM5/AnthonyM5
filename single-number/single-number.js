/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => nums.reduce((acc, cur) => acc ^ cur);
