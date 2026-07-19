class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {

        let ans = 0;

        while (x !== 0) {

            const digit = x % 10;

            x = Math.trunc(x / 10);

            ans = ans * 10 + digit;
        }

        if (
            ans < -(2 ** 31) ||
            ans > (2 ** 31 - 1)
        ) {
            return 0;
        }

        return ans;
    }
}