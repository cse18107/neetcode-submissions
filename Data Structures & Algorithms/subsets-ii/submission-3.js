class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a, b) => a - b);
        console.log(nums);
        let ans = [];
        this.getSubsetsWithDup(nums, ans, 0, []);
        return ans;
    }

    getSubsetsWithDup(nums, ans, i, cur) {
        if (i === nums.length) {
            ans.push([...cur]);
            return;
        }

        cur.push(nums[i]);
        this.getSubsetsWithDup(nums, ans, i + 1, cur);
        cur.pop();

        while (i < nums.length - 1 && nums[i] === nums[i + 1]) i++;
        this.getSubsetsWithDup(nums, ans, i + 1, cur);
    }
}
