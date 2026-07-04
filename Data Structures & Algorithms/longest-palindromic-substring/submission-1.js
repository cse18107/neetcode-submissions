class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {

        let maxLen = -Infinity;
        let sp = 0;

        for(let i=0;i<s.length;i++){
            for(let j=i;j<s.length;j++){
                if(this.solve(s, i, j)){
                    if(j-i+1>maxLen){
                        maxLen = j-i+1;
                        sp = i
                    }
                }
            }
        }
        return s.substring(sp, sp+maxLen);
    }

    solve(s, i, j){
        if(i>=j) return true;

        if(s[i]===s[j]){
            return this.solve(s, i+1, j-1);
        }

        return false;

    }
}
