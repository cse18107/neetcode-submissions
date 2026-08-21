class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let vis = Array.from({ length: nums.length }, () => false);
        let ans = [];
        this.getPermute(nums, vis, ans, []);

        return ans;
    }

    getPermute(nums, vis, ans, cur) {
        if (cur.length === nums.length) {
            ans.push([...cur]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (!vis[i]) {
                cur.push(nums[i]);
                vis[i] = true;
                this.getPermute(nums, vis, ans, cur);
                cur.pop();
                vis[i] = false;
            }
        }
    }
}
