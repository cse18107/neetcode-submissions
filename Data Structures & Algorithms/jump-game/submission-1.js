class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        if(nums.length===1) return true;
        if(nums[0] === 0) return false;
        return this.getCanReach(nums,0);
    }

    getCanReach(nums, i){
        if(i===nums.length-1) return true;
        if(i>=nums.length) return false;
        let maxJump = nums[i];
        let jump = 1;
        let ans = false;
        while(jump<=maxJump){
            ans = ans || this.getCanReach(nums, i+jump);
            jump++;
        }
        return ans;
    }
}
