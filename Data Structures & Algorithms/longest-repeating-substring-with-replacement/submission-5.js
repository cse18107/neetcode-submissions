class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let head = 0, tail = 0;
        let len = s.length;
        let freqObj = {}, maxLen = -Infinity;
        while(head<len){
            let char = s[head]
            freqObj[char] = freqObj[char]?freqObj[char]+1:1;
            while(!this.isValidSubstring(freqObj, k)){
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
    isValidSubstring(freqObj, k) {
        console.log(freqObj)
        let maxFreq = -Infinity, totalChar = 0;
        for(let value of Object.values(freqObj)){
            maxFreq=Math.max(maxFreq, value);
            totalChar+=value;
        }
        console.log(totalChar, maxFreq, k)
        return totalChar-maxFreq<=k;
    }
}
