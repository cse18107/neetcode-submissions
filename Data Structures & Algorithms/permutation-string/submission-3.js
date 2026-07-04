class Solution {
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

        const count = new Array(26).fill(0);

        // build frequency for s1
        for (let c of s1) {
            count[c.charCodeAt(0) - 97]++;
        }

        let left = 0;

        for (let right = 0; right < s2.length; right++) {
            // include right char
            count[s2[right].charCodeAt(0) - 97]--;

            // if window size exceeds → shrink from left
            if (right - left + 1 > s1.length) {
                count[s2[left].charCodeAt(0) - 97]++;
                left++;
            }

            // check if all zero
            if (count.every(c => c === 0)) {
                return true;
            }
        }

        return false;
    }
}