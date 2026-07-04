class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    /**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
characterReplacement(s, k) {
    const count = new Array(26).fill(0);
    let left = 0;
    let maxFreq = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        const index = s.charCodeAt(right) - 65; // 'A' = 65
        count[index]++;
        
        // Track most frequent char in current window
        maxFreq = Math.max(maxFreq, count[index]);

        // If replacements needed > k → shrink window
        while ((right - left + 1) - maxFreq > k) {
            count[s.charCodeAt(left) - 65]--;
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}
}
