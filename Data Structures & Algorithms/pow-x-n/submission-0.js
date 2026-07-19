class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
    myPow(x, n) {
        if (n < 0) {
            x = 1 / x;
            n = -n;
        }

        return this.power(x, n);
    }

    power(x, n) {
        if (n === 0) return 1;

        let half = this.power(x, Math.floor(n / 2));

        if (n % 2 === 0) {
            return half * half;
        }

        return half * half * x;
    }
}
