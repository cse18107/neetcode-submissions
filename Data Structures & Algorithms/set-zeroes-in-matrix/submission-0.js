class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        const rows = matrix.length;
        const cols = matrix[0].length;

        let firstRowZero = false;
        let firstColZero = false;

        // Check first row
        for (let j = 0; j < cols; j++) {
            if (matrix[0][j] === 0) {
                firstRowZero = true;
                break;
            }
        }

        // Check first column
        for (let i = 0; i < rows; i++) {
            if (matrix[i][0] === 0) {
                firstColZero = true;
                break;
            }
        }

        // Mark rows and columns
        for (let i = 1; i < rows; i++) {
            for (let j = 1; j < cols; j++) {
                if (matrix[i][j] === 0) {
                    matrix[i][0] = 0;
                    matrix[0][j] = 0;
                }
            }
        }

        // Fill zeros based on markers
        for (let i = 1; i < rows; i++) {
            for (let j = 1; j < cols; j++) {
                if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                    matrix[i][j] = 0;
                }
            }
        }

        // Zero first row if needed
        if (firstRowZero) {
            for (let j = 0; j < cols; j++) {
                matrix[0][j] = 0;
            }
        }

        // Zero first column if needed
        if (firstColZero) {
            for (let i = 0; i < rows; i++) {
                matrix[i][0] = 0;
            }
        }
    }
}
