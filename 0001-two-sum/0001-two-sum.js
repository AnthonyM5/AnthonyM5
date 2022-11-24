/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i]

        if(map[target-n] >= 0){
            return [map[target-n],i]
        } 
        else {
            map[n] = i
        }
    }
}