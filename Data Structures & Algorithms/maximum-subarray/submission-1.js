class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let maxAns = -Infinity;
        let sum = 0;
        for(let i=0;i<nums.length;i++){
            sum+=nums[i];
            maxAns = Math.max(maxAns, sum);
            if(sum<0){
                sum=0;
            }
            
        }
        return maxAns;
    }
}
