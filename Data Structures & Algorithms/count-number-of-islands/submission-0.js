class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let islands = 0;
        for(let i=0;i<grid.length;i++){
            for(let j=0;j<grid[i].length;j++){
                if(grid[i][j]==="1"){
                    this.dfs(i, j, grid);
                    islands++;
                }
            }
        }
        return islands;
    }

    dfs(i, j, grid) {
        if(i<0 || i>=grid.length || j<0 || j>=grid[i].length || grid[i][j]==="0" || grid[i][j]==="#") return;
        if(grid[i][j]==="1") grid[i][j] = "#";
        this.dfs(i-1, j, grid);
        this.dfs(i+1, j, grid);
        this.dfs(i, j-1, grid);
        this.dfs(i, j+1, grid);
    }
}
