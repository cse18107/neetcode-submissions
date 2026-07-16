class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let ans = [];
        this.getSubsets(nums, 0, ans, []);
        return ans;
    }

    getSubsets(nums, i, ans, cons){
        if(i===nums.length){
            ans.push([...cons]);
            return;
        }
        cons.push(nums[i]);
        this.getSubsets(nums, i+1, ans, cons);
        cons.pop();
        this.getSubsets(nums, i+1, ans, cons);
    }
}
