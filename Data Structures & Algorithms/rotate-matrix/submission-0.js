class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
        const n = matrix.length;

        // Step 1: Transpose
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                [matrix[i][j], matrix[j][i]] = [
                    matrix[j][i],
                    matrix[i][j],
                ];
            }
        }

        // Step 2: Reverse every row
        for (let i = 0; i < n; i++) {
            let left = 0;
            let right = n - 1;

            while (left < right) {
                [matrix[i][left], matrix[i][right]] = [
                    matrix[i][right],
                    matrix[i][left],
                ];
                left++;
                right--;
            }
        }
    }
}