class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for(let i=0;i<board.length;i++){
            if(!this.checkCol(i, board)) return false;
        }
        for(let i=0;i<board[0].length;i++){
            if(!this.checkRow(i, board)) return false;
        }
        for(let i=0;i<board.length;i+=3){
            for(let j=0;j<board[0].length;j+=3){
                if(!this.checkBox(i, j, board)) return false;
            }
        }
        return true;
    }

    checkCol(row, board) {
        let countNumbers = 0;
        let uniqueNumbers = new Set();
        for (let i = 0; i < board[0].length; i++) {
            if (board[row][i] !== ".") {
                uniqueNumbers.add(Number(board[row][i]));
                countNumbers++;
            }
        }
        return countNumbers === uniqueNumbers.size;
    }

    checkRow(col, board) {
        let countNumbers = 0;
        let uniqueNumbers = new Set();
        for (let i = 0; i < board.length; i++) {
            if (board[i][col] !== ".") {
                uniqueNumbers.add(Number(board[i][col]));
                countNumbers++;
            }
        }
        return countNumbers === uniqueNumbers.size;
    }

    checkBox(row, col, board) {
        let startX = Math.floor(row / 3) * 3,
            startY = Math.floor(col / 3) * 3;
        let endX = startX + 2,
            endY = startY + 2;
        console.log(row, col, startX, startY)
        let countNumbers = 0;
        let uniqueNumbers = new Set();
        for (let i = startX; i < startX + 3; i++) {
            for (let j = startY; j < startY + 3; j++) {
                if (board[i][j] !== ".") {
                    uniqueNumbers.add(Number(board[i][j]));
                    countNumbers++;
                }
            }
        }
        return countNumbers === uniqueNumbers.size;
    }
}
