function maxArea(height: number[]): number {
    let maxArea = 0;
    let left = 0;
    let best = 0;
    let right = height.length - 1;

    while (left < right) {
        const lh = Math.min(height[left], height[right])
        best = Math.max(best, lh * (right - left))

        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }
    return best
};