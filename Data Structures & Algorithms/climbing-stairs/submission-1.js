class Solution {
    constructor() {
        this.dp = [];
    }
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        this.dp = new Array(n + 1).fill(-1);
        return this.getNumWay(n);
    }

    getNumWay(n) {
        if (n === 0) return 1;
        if (n < 0) return 0;
        if(this.dp[n]!==-1) return this.dp[n]
        return this.dp[n]=this.getNumWay(n - 1) + this.getNumWay(n - 2);
    }
}
