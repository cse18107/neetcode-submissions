class Solution {
    maxSlidingWindow(nums, k) {
        const deque = []; // stores indices
        const result = [];

        for (let i = 0; i < nums.length; i++) {
            
            // Remove indices out of window
            if (deque.length && deque[0] <= i - k) {
                deque.shift();
            }

            // Maintain decreasing order
            while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
                deque.pop();
            }

            deque.push(i);

            // Window is ready
            if (i >= k - 1) {
                result.push(nums[deque[0]]);
            }
        }

        return result;
    }
}