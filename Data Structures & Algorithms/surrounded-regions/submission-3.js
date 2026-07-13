class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        let n= board.length, m = board[0].length;
        let markNotSurrounded = Array.from({length:n}, () => new Array(m).fill(false));
        for(let i=0;i<n;i++) {
            for(let j=0;j<m;j++) {
                if((i===0 || j===0 || i===n-1 || j===m-1) && board[i][j]==='O'){
                    this.dfs(board,i, j,markNotSurrounded);
                }
            }
        }

        for(let i=0;i<n;i++) {
            for(let j=0;j<m;j++) {
                if(board[i][j]==='O' && !markNotSurrounded[i][j]){
                    board[i][j]='X';
                }
            }
        }
    }

    dfs(board, i, j, markNotSurrounded) {
        markNotSurrounded[i][j] = true;
        let x = [-1, 0, 1, 0], y = [0, -1, 0, 1];
        for(let k =0;k<4;k++) {
            let nI = i+x[k], nJ = j+y[k];
            if(nI>=0 && nI<board.length && nJ>=0 && nJ<board[0].length && board[nI][nJ]==='O' && !markNotSurrounded[nI][nJ]){
                this.dfs(board, nI, nJ, markNotSurrounded);
            }
        }
    }
}
