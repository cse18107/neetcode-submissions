class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let head = 0,
            tail = 0;
        let charArr = s.split("");
        let charFreq = {},
            maxLen = -Infinity;

        function isValidFreq(charFreq) {
            for (let key of Object.keys(charFreq)) {
                if (charFreq[key] > 1) return false;
            }
            return true;
        }
        while (head < charArr.length) {
            if (charFreq[charArr[head]]) charFreq[charArr[head]]++;
            else charFreq[charArr[head]] = 1;
            head++;
            while (!isValidFreq(charFreq)) {
                charFreq[charArr[tail]]--;
                tail++;
            }
            maxLen = Math.max(maxLen, head - tail);
        }
        maxLen = Math.max(maxLen, head - tail);

        return maxLen;
    }
}
