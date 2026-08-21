class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let ans = [];

        this.getCombinationSum(nums, target, 0, ans, []);

        return ans;
    }

    getCombinationSum(nums, target, i, ans, cons) {
        if (i === nums.length) {
            if (target === 0) {
                ans.push([...cons]);
                
            }
            return;
        }
        if (target < 0) return;
     
        cons.push(nums[i]);
        this.getCombinationSum(nums, target - nums[i], i, ans, cons);
        cons.pop();
        this.getCombinationSum(nums, target, i + 1, ans, cons);
    }
}
