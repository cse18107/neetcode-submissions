class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let head = 0, tail = 0;
        let len = s.length;
        let freqObj = {}, maxLen = -Infinity;
        while(head<len){
            let char = s[head]
            freqObj[char] = freqObj[char]?freqObj[char]+1:1;
            while(!this.isValidSubstring(freqObj)){
                let removeChar = s[tail];
                freqObj[removeChar]--;
                tail++;
            }
            maxLen = Math.max(maxLen, head-tail+1);
            head++
        }
        maxLen = Math.max(maxLen, head-tail);
        return maxLen;
    }
    isValidSubstring(freqObj) {
        for(let value of Object.values(freqObj)){
            if(value>1) return false;
        }
        return true;
    }
}
