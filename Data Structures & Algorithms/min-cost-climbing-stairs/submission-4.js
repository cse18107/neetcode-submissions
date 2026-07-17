class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */

    minCostClimbingStairs(cost) {
        this.dp = new Array(cost.length+1).fill(0);
        this.dp[cost.length]=0;
        for(let i=cost.length-1;i>=0;i--){
            let count1 = this.dp[i+1];
            let count2 = 0
            if(i+2<=cost.length) count2 = this.dp[i+2];
            this.dp[i] = cost[i] + Math.min(count1, count2);
        }
        return Math.min(this.dp[0], this.dp[1]);
        // return Math.min(this.getMinCost( 0, cost),this.getMinCost(1, cost));
    }

    getMinCost(step, cost){
        if(step === cost.length) return 0;
        if(step>cost.length) return Infinity;
        if(this.dp[step]) return this.dp[step]
        return this.dp[step]=cost[step]+Math.min(this.getMinCost(step+1, cost), this.getMinCost(step+2, cost));
    }
}
