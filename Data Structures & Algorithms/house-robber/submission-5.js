class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        this.dp = new Array(nums.length+1).fill(0);
        for(let i=0;i<nums.length;i++){
            let count1 = 0;
            if(i-1>=0) count1 = this.dp[i-1];
            let count2 = 0;
            if(i-2>=0) count2 = this.dp[i-2];
            this.dp[i] = Math.max(count1,nums[i]+count2);
        }
        return this.dp[nums.length-1];
        // return this.maximumAmount(nums.length-1, nums);
    }

    maximumAmount(n, nums){
        if(n<0) return 0;
        if(this.dp[n]) return this.dp[n];
        return this.dp[n]=Math.max(nums[n]+this.maximumAmount(n-2, nums), this.maximumAmount(n-1, nums));
    }
}
