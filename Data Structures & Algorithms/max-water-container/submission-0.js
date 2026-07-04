class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i=0, j=heights.length-1, max = -Infinity;
        while(i<j){
            max = Math.max(max, (j-i)*Math.min(heights[i],heights[j]))
            if(heights[i]>heights[j])j--;
            else i++
        }
        return max;
    }
}
