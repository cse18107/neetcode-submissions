class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    constructor() {
        this.subSets = [];
    }
    subsets(nums) {
        
        this.getAllSubsets(0, nums, []);
        return this.subSets;
    }

    getAllSubsets(i,nums, subset){
        if(i===nums.length){
            this.subSets.push([...subset]);
            return;
        }

        subset.push(nums[i]);
        this.getAllSubsets(i+1, nums, subset);
        subset.pop();
        this.getAllSubsets(i+1, nums, subset);
    }
}
