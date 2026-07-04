class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let prevMin = [],
            nextMin = [],
            stack = [];
        for (let i = 0; i < heights.length; i++) {
            if (i===0) {
                stack.push({ val: heights[i], ind: i });
                prevMin[0] = 0
            }
            else {
                while (stack.length > 0 && stack[stack.length - 1].val >= heights[i]) {
                    stack.pop();
                }
                if (stack.length === 0) {
                    prevMin[i] = 0;
                    stack.push({ val: heights[i], ind: i });
                } else {
                    let topInd = stack[stack.length - 1].ind;
                    prevMin[i] = topInd+1;
                    stack.push({ val: heights[i], ind: i });
                }
            }
        }
        stack = [];
        for (let i = heights.length-1; i >= 0; i--) {
            if (stack.length===0){
                stack.push({ val: heights[i], ind: heights.length-1 });
                nextMin[i] = heights.length-1;
            } 
            else {
                while (stack.length > 0 && stack[stack.length - 1].val >= heights[i]) {
                    stack.pop();
                }
                if (stack.length === 0) {
                    nextMin[i] = heights.length-1;
                    stack.push({ val: heights[i], ind: i });
                } else {
                    let topInd = stack[stack.length - 1].ind;
                    nextMin[i] = topInd-1;
                    stack.push({ val: heights[i], ind: i });
                }
            }
        }
        let maxArea = -Infinity;
        console.log(prevMin, nextMin)
        for(let i=0;i<heights.length;i++){
            let diff = (nextMin[i]-prevMin[i]);
            if(diff===0){
                diff=1;
            }else {
                diff++;
            }
            maxArea = Math.max(maxArea, diff*heights[i]);
        }
        return maxArea;
    }
}
