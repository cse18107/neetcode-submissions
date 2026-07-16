class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let ans = [];
        this.getCombinationSum(nums, 0, 0, target, [], ans);
        return ans;
    }

    getCombinationSum(nums, i, sum, target, cons, ans){

        if(sum===target){
            ans.push([...cons]);
            return;
        }
        if(sum>target) return;
        if(i>nums.length-1) return ;
        cons.push(nums[i]);
        this.getCombinationSum(nums, i, sum+nums[i], target, cons, ans);
        cons.pop()
        this.getCombinationSum(nums, i+1, sum, target, cons, ans);
    }
}
