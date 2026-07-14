class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let n = matrix.length, m = matrix[0].length, row = -1;
        console.log(n, m)
        for(let i=0;i<n;i++){
            if(target>=matrix[i][0] && target<=matrix[i][m-1]) {
                row = i;
                break;
            }
        }
        if(row===-1) return false;
        let left = 0, right = m-1;
        while(left<=right){
            let mid = left + (Math.trunc((right-left)/2));
            if(matrix[row][mid]===target) return true;
            if(matrix[row][mid]>target)right--;
            else left++;
        }

        return false;
    }
}
