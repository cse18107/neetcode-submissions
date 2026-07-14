class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let ans = "";
        for(let i=0;i<strs.length;i++) {
            ans+=strs[i].length+"#"+strs[i];
        }
        console.log(ans)
        return ans;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let ans = [];
        let findStrs = str;
        while(findStrs.length>0){
            let i=0;
            while(findStrs[i]!=='#'){
                i++
            }
            let len = Number(findStrs.substring(0,i));
            let word = findStrs.substring(i+1, i+1+len)
            ans.push(word);
            if(i+1+len===findStrs.length) break;
            findStrs = findStrs.substring(i+1+len, findStrs.length)
        }
        return ans;
    }
}
