class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let n = heights.length;
        let prevMin = new Array(n).fill(0);
        let nextMin = new Array(n).fill(0);
        let stack = [];
        for (let i = 0; i < n; i++) {
            
            if (stack.length === 0) {
                prevMin[i] = -1;
                stack.push([i, heights[i]]);
            } else {
                while (stack.length>0 && stack[stack.length - 1][1] >= heights[i]) {
                    stack.pop();
                }
                if (stack.length === 0) {
                    prevMin[i] = -1;
                    stack.push([i, heights[i]]);
                } else {
                    prevMin[i] = stack[stack.length - 1][0];
                    stack.push([i, heights[i]]);
                }
            }
        }
        stack = [];
        for (let i = n - 1; i >= 0; i--) {
            if (stack.length === 0) {
                nextMin[i] = n;
                stack.push([i, heights[i]]);
            } else {
                while (stack.length> 0 && stack[stack.length - 1][1] >= heights[i]) {
                    stack.pop();
                }
                if (stack.length === 0) {
                    nextMin[i] = n;
                    stack.push([i, heights[i]]);
                } else {
                    nextMin[i] = stack[stack.length - 1][0];
                    stack.push([i, heights[i]]);
                }
            }
        }

        let maxArea = -Infinity;
        for (let i = 0; i < n; i++) {
            maxArea = Math.max(maxArea, heights[i] * (nextMin[i] - prevMin[i] - 1));
        }
        return maxArea;
    }
}
