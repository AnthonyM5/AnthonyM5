function twoSum(nums: number[], target: number): number[] {
    let complementSet = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const numValue = nums[i]
        const complement = target - numValue

        if (complementSet.has(complement)) {
            const complementIndex = complementSet.get(complement)
            return [complementIndex, i]
        }

        complementSet.set(numValue, i)
    }
    return null
};

function complement(num1: number, target: number): number {
    return target - num1;
};