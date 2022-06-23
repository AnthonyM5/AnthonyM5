/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let pivot = 0;
    let leftSum = 0;
    let rightSum = nums.slice(1).reduce((acc, ele) => ele + acc, 0);
    
    while(pivot < nums.length){
        if(leftSum === rightSum){
            return pivot;
        }else{
            const prevEle = nums[pivot];
            leftSum += prevEle;
            pivot++;
            const currEle = nums[pivot];
            rightSum -= currEle;
        }
    }
    
    return -1
};