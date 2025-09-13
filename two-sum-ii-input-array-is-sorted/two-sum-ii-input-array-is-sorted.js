/**
 * Problem: Two Sum II - Input Array Is Sorted (LeetCode 167)
 * 
 * Description:
 * Given a 1-indexed array of integers that is already sorted in non-decreasing order,
 * find two numbers that add up to a specific target number.
 * 
 * Example:
 * Input: numbers = [2,7,11,15], target = 9
 * Output: [1,2] (1-indexed)
 * Explanation: 2 + 7 = 9
 * 
 * Approach Explanation:
 * 1. Use two pointers technique (left and right)
 * 2. Since array is sorted, we can move pointers based on sum comparison:
 *    - If sum is too small, move left pointer right
 *    - If sum is too large, move right pointer left
 * 3. When sum equals target, return positions (1-indexed)
 * 
 * Time Complexity: O(n) - single pass through the array
 * Space Complexity: O(1) - only using two pointers
 * 
 * Pseudo code:
 * Initialize left = 0, right = array.length - 1
 * While left < right:
 *    Calculate sum = numbers[left] + numbers[right]
 *    If sum equals target: return [left+1, right+1]
 *    If sum < target: increment left
 *    If sum > target: decrement right
 * 
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (numbers, target) => {
  let left = 0
  let right = numbers.length - 1

  while (left < right) {
    let sum = numbers[left] + numbers[right]

    if (sum == target) {
      return [++left, ++right]
    }

    if (sum < target) left++
    if (sum > target) right--
  }
}