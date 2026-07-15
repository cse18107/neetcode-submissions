class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let charFreq = new Array(26).fill(0);

        for(let i=0;i<s1.length;i++){
            charFreq[s1[i].charCodeAt(0)-97]++
        }

        let left = 0;

        for(let right =0;right<s2.length;right++){
            charFreq[s2[right].charCodeAt(0)-97]--;

            if(right-left+1>s1.length){
                charFreq[s2[left].charCodeAt(0)-97]++;
                left++;
            }

            if(charFreq.every(c=> c===0))return true;
        }
        return false;
    }
}
