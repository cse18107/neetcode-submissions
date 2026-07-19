class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {

        let ans = 0;

        for (const num of nums) {
            ans ^= num;
        }

        return ans;
    }
}