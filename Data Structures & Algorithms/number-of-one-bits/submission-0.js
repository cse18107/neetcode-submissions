class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    hammingWeight(n) {

        let count = 0;

        while (n !== 0) {
            count += (n & 1);
            n >>>= 1;
        }

        return count;
    }
}