class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let dqueue = [];
        let n = nums.length;
        let ans = [];

        for (let i = 0; i < n; i++) {
            if(dqueue.length && dqueue[0]<=i-k){
                dqueue.shift();
            }
            while (dqueue.length && nums[dqueue[dqueue.length - 1]] < nums[i]) {
                dqueue.pop();
            }
            dqueue.push(i);

            if(i>=k-1){
                ans.push(nums[dqueue[0]]);
            }
        }
        return ans;
    }
}
