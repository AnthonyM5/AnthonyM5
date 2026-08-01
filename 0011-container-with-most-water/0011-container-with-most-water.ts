function maxArea(height: number[]): number {
    let left = 0;
    let best = 0;
    let right = height.length - 1;

    // Sliding window, start from left pointer to right pointer until they meet at the middle
    while (left < right) {
        // take the lower of the two heights 
        const lh = Math.min(height[left], height[right])

        // keep track of the best area: lh * the space between the two pointers) 
        best = Math.max(best, lh * (right - left))
        // if the left pointer height is lower than the right, we can shrink the window from the left, if the height on the right is higher, we can shrink the window from the right.
        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }
    return best
};