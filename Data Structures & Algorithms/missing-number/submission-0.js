class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {

        const n = nums.length;

        let expected = n * (n + 1) / 2;

        let actual = 0;

        for (const num of nums) {
            actual += num;
        }

        return expected - actual;
    }
}