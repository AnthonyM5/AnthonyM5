function productExceptSelf(nums: number[]): number[] {
    const results = new Array<number>(nums.length).fill(1)
    let prefix = 1;

    for (let i = 0; i < nums.length; i++) {
        results[i] *= prefix;
        prefix *= nums[i]
    }

    let suffix = 1;

    for (let j = nums.length - 1; j >= 0; j--) {
        results[j] *= suffix;
        suffix *= nums[j]
    } 

    return results
};