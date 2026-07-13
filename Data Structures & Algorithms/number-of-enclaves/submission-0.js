class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    numEnclaves(grid) {
        let n=grid.length, m = grid[0].length;
        let markBorderLandCells = Array.from({length: n}, () => new Array(m).fill(false));
        for(let i=0;i<n;i++) {
            for(let j=0;j<m;j++) {
                if((i===0 || j===0 || i===grid.length-1 || j===grid[0].length-1) && grid[i][j]===1){
                    this.dfs(grid, i, j, markBorderLandCells);
                }
            }
        }
        let count =0
        for(let i=0;i<n;i++) {
            for(let j=0;j<m;j++) {
                if(grid[i][j]===1 && !markBorderLandCells[i][j])count++;
            }
        }
        return count;
    }
    dfs(board, i, j, markBorderLandCells){
        markBorderLandCells[i][j] = true;

        let x = [-1, 0, 1, 0], y = [0, -1, 0, 1];
        for(let k =0;k<4;k++) {
            let nI = i+x[k], nJ = j+y[k];
            if(nI>=0 && nI<board.length && nJ>=0 && nJ<board[0].length && board[nI][nJ]===1 && !markBorderLandCells[nI][nJ]){
                this.dfs(board, nI, nJ, markBorderLandCells);
            }
        }
    }

}
