class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    solve(s, i, j){
        if(i>=j) return true;

        if(s[i]===s[j]){
            return this.solve(s, i+1, j-1);
        }

        return false;
    }
    countSubstrings(s) {
        let count = 0;
        for(let i=0;i<s.length;i++){
            for(let j=i;j<s.length;j++){
                if(this.solve(s, i, j))count++;
            }
        }
        return count;
    }
}
