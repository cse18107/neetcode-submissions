class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    largestDivisibleSubset(nums) {

        nums.sort((a, b) => a - b);

        let n = nums.length;

        let dp = new Array(n).fill(1);
        let parent = new Array(n);

        for (let i = 0; i < n; i++) {
            parent[i] = i;
        }

        let maxLen = 1;
        let lastIndex = 0;

        for (let i = 1; i < n; i++) {

            for (let j = 0; j < i; j++) {

                if (
                    nums[i] % nums[j] === 0 &&
                    dp[i] < dp[j] + 1
                ) {

                    dp[i] = dp[j] + 1;
                    parent[i] = j;
                }
            }

            if (dp[i] > maxLen) {
                maxLen = dp[i];
                lastIndex = i;
            }
        }

        let ans = [];

        while (parent[lastIndex] !== lastIndex) {
            ans.unshift(nums[lastIndex]);
            lastIndex = parent[lastIndex];
        }

        ans.unshift(nums[lastIndex]);

        return ans;
    }
}