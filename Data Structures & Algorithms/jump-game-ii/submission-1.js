class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        this.dp = new Array(nums.length).fill(0);
        return this.getCanReach(nums, 0);
    }
    getCanReach(nums, i) {
        if (i === nums.length - 1) return 0;
        if (i >= nums.length) return Infinity;
        if(this.dp[i]) return this.dp[i];
        let maxJump = nums[i];
        let jump = 1;
        let ans = Infinity;
        while (jump <= maxJump) {
            ans = Math.min(ans, this.getCanReach(nums, i + jump)+1);
            jump++;
        }
        return this.dp[i]=ans;
    }
}
