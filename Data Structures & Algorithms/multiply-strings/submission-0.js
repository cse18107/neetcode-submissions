class Solution {
    /**
     * @param {string} num1
     * @param {string} num2
     * @return {string}
     */
    multiply(num1, num2) {
        if (num1 === "0" || num2 === "0") return "0";

        const m = num1.length;
        const n = num2.length;

        const res = new Array(m + n).fill(0);

        for (let i = m - 1; i >= 0; i--) {
            for (let j = n - 1; j >= 0; j--) {

                const digit1 = num1.charCodeAt(i) - 48;
                const digit2 = num2.charCodeAt(j) - 48;

                const product = digit1 * digit2;

                const p2 = i + j + 1;
                const p1 = i + j;

                const sum = product + res[p2];

                res[p2] = sum % 10;
                res[p1] += Math.floor(sum / 10);
            }
        }

        // Skip leading zeros
        let i = 0;
        while (i < res.length && res[i] === 0) {
            i++;
        }

        return res.slice(i).join("");
    }
}
