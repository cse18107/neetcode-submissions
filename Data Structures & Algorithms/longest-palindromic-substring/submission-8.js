class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        const n = s.length;
        if (n <= 1) return s;

        const rev = s.split("").reverse().join("");

        const dp = Array.from(
            { length: n + 1 },
            () => new Array(n + 1).fill(0)
        );

        let maxLen = 0;
        let endIndex = 0;

        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {

                if (s[i - 1] === rev[j - 1]) {

                    dp[i][j] = dp[i - 1][j - 1] + 1;

                    const len = dp[i][j];

                    // Validate that it represents a palindrome
                    if (i - len === n - j && len > maxLen) {
                        maxLen = len;
                        endIndex = i;
                    }

                } else {
                    dp[i][j] = 0;
                }
            }
        }

        return s.substring(endIndex - maxLen, endIndex);
    }
}