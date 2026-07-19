class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        let slow = n;
        let fast = n;

        do {
            slow = this.nextNumber(slow);
            fast = this.nextNumber(this.nextNumber(fast));
        } while (slow !== fast);

        return slow === 1;
    }

    nextNumber(n) {
        let sum = 0;

        while (n > 0) {
            let digit = n % 10;
            sum += digit * digit;
            n = Math.floor(n / 10);
        }

        return sum;
    }
}