class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let ans = 0;
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                if (grid[i][j] === 1) {
                    let area = this.dfs(i, j, grid);
                    ans = Math.max(ans, area);
                }
            }
        }
        return ans;
    }

    dfs(i, j, grid) {
        if (
            i < 0 ||
            i >= grid.length ||
            j < 0 ||
            j >= grid[i].length ||
            grid[i][j] === 0 ||
            grid[i][j] === -1
        )
            return 0;
        if (grid[i][j] === 1) {
            grid[i][j] = -1;
            
        }
        return 1+this.dfs(i - 1, j, grid)+this.dfs(i + 1, j, grid)+this.dfs(i, j - 1, grid)+this.dfs(i, j + 1, grid);

    }
}
