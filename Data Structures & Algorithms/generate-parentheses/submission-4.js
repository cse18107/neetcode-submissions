class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let ans = [];
        function generate(open, close, exp){
            if(exp.length===2*n){
                ans.push(exp);
                return
            }

            if(open===n){
                return generate(open, close+1, exp+")");
            }else if(open===close){
                return generate(open+1, close, exp+"(");
            }else if(open>close) {
                generate(open+1, close, exp+"(");
                generate(open, close+1, exp+")");
            }
        }

        generate(0, 0, "");
        return ans;
    }
}
