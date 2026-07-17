class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */

    minCostClimbingStairs(cost) {
        this.dp = new Array(cost.length+1).fill(0);
        return Math.min(this.getMinCost( 0, cost),this.getMinCost(1, cost));
    }

    getMinCost(step, cost){
        if(step === cost.length) return 0;
        if(step>cost.length) return Infinity;
        if(this.dp[step]) return this.dp[step]
        return this.dp[step]=cost[step]+Math.min(this.getMinCost(step+1, cost), this.getMinCost(step+2, cost));
    }
}
