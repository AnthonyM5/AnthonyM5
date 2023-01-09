/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = (nums, k) => {
    let length = nums.length;
    let memo = {};
    for (let i = 0; i < length; i++)  {
        if (i - memo[nums[i]] <= k) {
            return true;
        } else {
            memo[nums[i]] = i;
        };
    };
    return false;
};