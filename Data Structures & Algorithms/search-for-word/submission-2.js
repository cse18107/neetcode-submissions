class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        let charArr = word.split("");
        let getWord = false;
        for(let i=0;i<board.length;i++){
            for(let j=0;j<board[i].length;j++){
                if(board[i][j]===charArr[0]){
                    getWord = getWord || this.dfs(board, charArr, 0, i, j);

                    if(getWord) return true;
                }
            }
        }
        return false;

    }
    dfs(board, charArr, ind, i, j){
        if(i<0 || i>=board.length || j<0 || j>=board[i].length || board[i][j]!==charArr[ind] || board[i][j]==="#") return false;

        if(board[i][j]===charArr[ind] && ind===charArr.length-1) return true
        board[i][j] = "#"
        let top = this.dfs(board, charArr, ind+1, i-1, j);
        let bottom = this.dfs(board, charArr, ind+1, i+1, j);
        let left = this.dfs(board, charArr, ind+1, i, j-1);
        let right = this.dfs(board, charArr, ind+1, i, j+1);
        board[i][j] = charArr[ind];
        return top || bottom || left || right;
    }
}
