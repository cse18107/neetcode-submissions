class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        function convertToN(board, i, j){
            board[i][j] = "N";
            console.log(board);
            if(i-1>=0 && board[i-1][j]==="O"){
                convertToN(board, i-1, j);
            }
            if(i+1<board.length && board[i+1][j]==="O"){
                convertToN(board, i+1, j);
            }
            if(j-1>=0 && board[i][j-1]==="O"){
                convertToN(board, i, j-1);
            }
            if(j+1<board[i].length && board[i][j+1]==="O"){
                convertToN(board, i, j+1)
            }
        }
        for(let i=0;i<board.length;i++){
            for(let j=0;j<board[i].length;j++){
                if(i===0||j===0||i===board.length-1||j===board[i].length-1){
                    
                    if(board[i][j]==="O"){
                        convertToN(board, i, j);
                    }
                }
            }

        }
        for(let i=0;i<board.length;i++){
            for(let j=0;j<board[i].length;j++){
                
                    if(board[i][j]==="O"){
                        board[i][j]="X"
                    }else if(board[i][j]==="N")board[i][j] = "O"
                
            }
            
        }
    }
}
