class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let result = [];
        function generate(open, close, exp){
 
            if(exp.length===2*n){
                result.push(exp);
                return;
            }

            if(open===n){
                generate(open, close+1, exp+")");
            }else if(open===close){
                generate(open+1, close, exp+"(")
            }else if(open>close){
                generate(open+1, close, exp+"(");
                generate(open, close+1, exp+")");
            }
        }
        generate(0, 0, "");
        return result

    }
}
