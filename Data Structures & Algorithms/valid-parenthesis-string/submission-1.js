class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) {
        this.dp = Array.from({ length: s.length + 1 }, () =>
            new Array(s.length + 1).fill(undefined),
        );
        return this.getIsValid(0, 0, s);
    }

    getIsValid(ind, count, s) {
        if (count < 0) return false;
        if (count > 0 && ind === s.length) return false;
        if (count === 0 && ind === s.length) return true;
        if (this.dp[ind][count] === false || this.dp[ind][count] === true) return this.dp[ind][count];
        if (s[ind] === "(") {
            return (this.dp[ind][count] = this.getIsValid(ind + 1, count + 1, s));
        } else if (s[ind] === ")") {
            return (this.dp[ind][count] = this.getIsValid(ind + 1, count - 1, s));
        } else {
            return (this.dp[ind][count] =
                this.getIsValid(ind + 1, count + 1, s) ||
                this.getIsValid(ind + 1, count - 1, s) ||
                this.getIsValid(ind + 1, count, s));
        }
    }
}
