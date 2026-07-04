class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let i=0;
        if(target<matrix[0][0]) return false;
        let rowLen = matrix.length, colLen = matrix[0].length;
        if(rowLen===1&&colLen===1){
            if(target===matrix[0][0])return true;
            else return false;
        }
        while(i<rowLen){
                if (target > matrix[i][colLen - 1]) {
        i++;
    } else if (target < matrix[i][0]) {
        return false;
    } else {
        break;
    }
        }
        if (i === rowLen) return false;
        console.log(i);
        let j=0,k=colLen-1;
        while(j<=k){
            let mid = Math.trunc((j+k)/2);
            if(target===matrix[i][mid])return true;
            if(target>matrix[i][mid]){
                j=mid+1;
            }else {
                k=mid-1;
            }
        }
        return false;
        
    }
}
