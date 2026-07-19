class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    reverseBits(n) {

        let ans = 0;

        for (let i = 0; i < 32; i++) {

            // Shift answer left
            ans <<= 1;

            // Add last bit of n
            ans |= (n & 1);

            // Remove last bit
            n >>>= 1;
        }

        // Convert to unsigned 32-bit integer
        return ans >>> 0;
    }
}