class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let left = 0,
            right = 0,
            charFreqMap = {},
            minLen = Infinity,
            ans = "";
        let sArr = s.split(""),
            tArr = t.split(""),
            tCharFreqMap = {};
        for (let i = 0; i < tArr.length; i++) {
            if (tCharFreqMap[tArr[i]]) tCharFreqMap[tArr[i]]++;
            else tCharFreqMap[tArr[i]] = 1;
        }
        console.log(tCharFreqMap);
        while (right < s.length) {
            let char = s[right];
            if (charFreqMap[char]) charFreqMap[char]++;
            else charFreqMap[char] = 1;
            right++;
            
            while (isValid(charFreqMap, tCharFreqMap)) {
                console.log(charFreqMap, right,left, minLen)
                if (right - left < minLen) {
                    minLen = right - left;
                    ans = sArr.slice(left, right).join("");
                    console.log(ans)
                }
                let tchar = s[left];
                charFreqMap[tchar]--;
                left++;
            }
        }
        
        function isValid(charFreqMap, tCharFreqMap) {
            for (let key of Object.keys(tCharFreqMap)) {
                if (!charFreqMap[key]) return false;
                else if (charFreqMap[key] < tCharFreqMap[key]) return false;
            }
            return true;
        }
        return ans;
    }
}
