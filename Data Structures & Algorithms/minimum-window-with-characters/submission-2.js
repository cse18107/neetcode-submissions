class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let tcharFreq = {};
        for (let ch of t) {
            tcharFreq[ch] = tcharFreq[ch] ? tcharFreq[ch] + 1 : 1;
        }
        let left = 0,
            right = 0,
            min = Infinity,
            ans = "";
        while (right < s.length) {
            if (s[right] in tcharFreq) tcharFreq[s[right]]--;
            right++;
            // console.log(this.isAllCharPresent(tcharFreq))
            while (this.isAllCharPresent(tcharFreq)) {
                if (min > right - left + 1) {
                    min = right - left + 1;
                    ans = s.substring(left, right);
                }
                if (s[left] in tcharFreq) tcharFreq[s[left]]++;
                left++;
                
            }
            
        }
        if (this.isAllCharPresent(tcharFreq)) {
            if (min > right - left + 1) {
                min = right - left + 1;
                ans = s.substring(left, right);
            }
        }
        return ans;
    }
    isAllCharPresent(tcharFreq){
        
        for(let value of Object.values(tcharFreq)) {
            if(value>0) return false;
        }
        return true;
    }
}
