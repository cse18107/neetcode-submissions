class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        this.dp = new Array(nums.length+1).fill(0);
        return this.maximumAmount(nums.length-1, nums);
    }

    maximumAmount(n, nums){
        if(n<0) return 0;
        if(this.dp[n]) return this.dp[n];
        return this.dp[n]=Math.max(nums[n]+this.maximumAmount(n-2, nums), this.maximumAmount(n-1, nums));
    }
}
