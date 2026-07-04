class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let charFreq = {}
        let ans = true;
        s.split('').forEach((ch)=>{
            charFreq[ch] = (charFreq[ch] ?? 0) + 1;
        });
        t.split('').forEach(ch => {
            console.log(!charFreq[ch])
            if(!charFreq[ch]) ans = false
            charFreq[ch]--;
            if(charFreq[ch]<0) ans = false
        })
        console.log(Object.values(charFreq))
        for(let values of Object.values(charFreq)){
            if(values>0) ans = false;
        }
        return ans;
    }
}
