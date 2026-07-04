class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        for(let i=0;i<tokens.length;i++){
            let token = tokens[i];
            if(token==='+'){
                let val2 = stack.pop(), val1 = stack.pop();
                stack.push(val1+(val2));
            }else if(token==='-'){
                let val2 = stack.pop(), val1 = stack.pop();
                stack.push(val1-(val2));
            }else if(token==='*'){
                let val2= stack.pop(), val1 = stack.pop();
                stack.push(val1*(val2));
            }else if(token==='/'){
                let val2 = stack.pop(), val1 = stack.pop();
                stack.push(Math.trunc(val1/(val2)));
            }else {
                stack.push(Number(token));
            }
        }
        let ans = stack.pop();
        return ans;
    }
}
