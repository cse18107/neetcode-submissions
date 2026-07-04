class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for (let i = 0; i < board.length; i++) {
            let count = 0;
            let rowSet = new Set();
            for (let j = 0; j < board[0].length; j++) {
                if (board[i][j] !== ".") {
                    count++;
                    let val = Number(board[i][j]);
                    rowSet.add(val);
                }
            }
            if (rowSet.size !== count) return false;
        }
        for (let i = 0; i < board[0].length; i++) {
            let count = 0;
            let columnSet = new Set();
            for (let j = 0; j < board.length; j++) {
                if (board[j][i] !== ".") {
                    count++;
                    let val = Number(board[j][i]);
                    columnSet.add(val);
                }
            }
   
            if (columnSet.size !== count) return false;
        }
        let x = 0,
            y = 0;
        while (x < board.length && y < board[0].length) {
            let count = 0;
            let areaSet = new Set();
            for (let i = x; i < x + 3; i++) {
                for (let j = y; j < y + 3; j++) {
                    if (board[j][i] !== ".") {
                        count++;
                        let val = Number(board[j][i]);
                        areaSet.add(val);
                    }
                }
            }

            if(areaSet.size!==count) return false;
            y=y+3;
            if(y>=board[0].length){
                y=0;
                x=x+3;
            }
        }

        return true;
    }
}
