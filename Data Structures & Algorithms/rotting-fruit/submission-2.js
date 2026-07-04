class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let queue = [],
            helper = [];
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                if (grid[i][j] === 2) queue.push({ i: i, j: j });
            }
        }
        console.log(queue);
        let level = -1;
        while (queue.length > 0) {
            let cell = queue[0];
            queue.shift();
            let i = cell.i,
                j = cell.j;
            if (i - 1 >= 0 && grid[i - 1][j] === 1) {
                grid[i - 1][j] = 2;
                helper.push({ i: i - 1, j: j });
            }
            if (i + 1 < grid.length && grid[i + 1][j] === 1) {
                grid[i + 1][j] = 2;
                helper.push({ i: i + 1, j: j });
            }
            if (j - 1 >= 0 && grid[i][j - 1] === 1) {
                grid[i][j - 1] = 2;
                helper.push({ i: i, j: j - 1 });
            }
            if (j + 1 < grid[0].length && grid[i][j + 1] === 1) {
                grid[i][j + 1] = 2;
                helper.push({ i: i, j: j + 1 });
            }

            if (queue.length === 0) {
                level++;
                console.log(helper)
                while (helper.length > 0) {
                    queue.push(helper[0]);
                    helper.shift();
                    
                }
            }
        }
        console.log(grid)
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                if (grid[i][j] === 1) return -1;
            }
        }
        
        return level===-1?0:level;
    }
}
