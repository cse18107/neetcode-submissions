class Solution {
    construct() {
        this.dp = []
    }
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        this.dp = new Array(cost.length).fill(-1);
        return Math.min(this.getMinCost(cost.length-1, cost), this.getMinCost(cost.length-2, cost));
    }

    getMinCost(stair, cost){
        if(stair<0) return 0;
        if(this.dp[stair]!=-1) return this.dp[stair]
        return this.dp[stair] = cost[stair]+ Math.min(this.getMinCost(stair-1, cost), this.getMinCost(stair-2, cost));
    }
}
