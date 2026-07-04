class Solution {
    constructor() {
        this.subsets = [];
    }
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        this.getCombinationSum(nums, 0, target, 0, []);
        return this.subsets;
    }

    getCombinationSum(nums, i, target, sum, subset){
        console.log(sum)
        if(sum>target) return;
        if(i>=nums.length){
            if(sum===target)this.subsets.push([...subset]);
            return ;
        }

        subset.push(nums[i]);
        this.getCombinationSum(nums, i, target, sum+nums[i], subset);
        subset.pop();
        this.getCombinationSum(nums, i+1, target, sum, subset);

    }
}
