class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let charFreqS = {}, charFreqT = {};
        let ans = true;
        if(s.length !== t.length) return false;
        let sArr = s.split(''), tArr = t.split('');
        for(let i =0;i<sArr.length;i++){
            charFreqS[sArr[i]] = (charFreqS[sArr[i]] ?? 0) + 1;
            charFreqT[tArr[i]] = (charFreqT[tArr[i]] ?? 0) + 1;
        };
        
        for(let key of Object.keys(charFreqS)){
            if(charFreqS[key]!==charFreqT[key]) return false;
        }
        return ans;
    }
}
