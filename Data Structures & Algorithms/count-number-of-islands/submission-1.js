class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let n = grid.length, m = grid[0].length;
        let vis = Array.from({length: n}, () => new Array(m).fill(false));
        let count = 0;
        for(let i=0;i<n;i++){
            for(let j=0;j<m;j++){
                if(!vis[i][j] && grid[i][j]==='1'){
                    count++;
                    this.dfs(i, j, vis, grid);
                }
            }
        }
        return count;
    }

    dfs(i, j, vis, grid){
        vis[i][j] = true;

        let x = [-1, 0, 1, 0], y = [0, -1, 0, 1];

        for(let k =0 ;k<x.length;k++){
            let nX = i+x[k], nY = j+y[k];
            if(nX>=0 && nX<grid.length && nY>=0 && nY<grid[0].length && grid[nX][nY]==="1"&& !vis[nX][nY]){
                this.dfs(nX, nY, vis, grid);
            }
        }
    }
}
