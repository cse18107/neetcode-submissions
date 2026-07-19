class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) {
        let ans = [];

        let top = 0;
        let bottom = matrix.length - 1;
        let left = 0;
        let right = matrix[0].length - 1;

        while (top <= bottom && left <= right) {

            // Traverse top row
            for (let j = left; j <= right; j++) {
                ans.push(matrix[top][j]);
            }
            top++;

            // Traverse right column
            for (let i = top; i <= bottom; i++) {
                ans.push(matrix[i][right]);
            }
            right--;

            // Traverse bottom row
            if (top <= bottom) {
                for (let j = right; j >= left; j--) {
                    ans.push(matrix[bottom][j]);
                }
                bottom--;
            }

            // Traverse left column
            if (left <= right) {
                for (let i = bottom; i >= top; i--) {
                    ans.push(matrix[i][left]);
                }
                left++;
            }
        }

        return ans;
    }
}