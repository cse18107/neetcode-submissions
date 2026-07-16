class Solution {
    constructor(){
        this.prefixNode = new PrefixNode();
    }
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        for(let word of words) this.insert(word);

        let n = board.length, m = board[0].length;
        let ans = [], vis = Array.from({length: n}, () => new Array(m).fill(false));
        let node = this.prefixNode;
        for(let i=0;i<n;i++){
            for(let j=0;j<m;j++){
                if(!node.charecters[board[i][j]]) continue
                this.dfs(i, j, board, node.charecters[board[i][j]], ans, vis, board[i][j]);
                
            }
        }
        return ans;
    }

    dfs(i, j, board, node, ans, vis, word){
        if(node.isEnd){
           if(!ans.find((value)=> value===word)) ans.push(word);
        }
        vis[i][j] = true;
        let x = [-1, 0, 1, 0], y = [0, -1, 0, 1];
        for(let k=0;k<4;k++){
            let nI = i+x[k], nJ = j+y[k];
            if(nI>=0 && nJ>=0 && nI<board.length && nJ<board[0].length&& !vis[nI][nJ])
            if(nI>=0 && nJ>=0 && nI<board.length && nJ<board[0].length && node.charecters[board[nI][nJ]] && !vis[nI][nJ]){
                this.dfs(nI, nJ, board, node.charecters[board[nI][nJ]], ans, vis, word+board[nI][nJ]);
            }
        }
        vis[i][j] = false;
    }

    insert(word) {
        let node = this.prefixNode;
        for (let alpha of word) {
            if (!node.charecters[alpha]) {
                node.charecters[alpha] = new PrefixNode();
              
                node = node.charecters[alpha];
            }else {
                node = node.charecters[alpha];
            }
        }
        node.isEnd = true;
       
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let node = this.prefixNode;
        for (let alpha of word) {
            if (!node.charecters[alpha]) return false;
            node = node.charecters[alpha];
        }
        if (!node.isEnd) return false;
        return true;
    }

}

class PrefixNode {
    constructor() {
        ((this.charecters = {}), (this.isEnd = false));
    }
}
