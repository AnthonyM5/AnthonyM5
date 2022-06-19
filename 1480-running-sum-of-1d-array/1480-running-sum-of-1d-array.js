/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = (nums) => {
    let output = [nums[0]];
    count = nums[0];
    for (let i=1; i<nums.length; i++) {
        output.push(count + nums[i]);
        count += nums[i];
    }
    return output;
}