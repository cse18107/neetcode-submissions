class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let len = tokens.length;
        let stack = [];
        for(let i=0;i<len;i++){
            if(tokens[i]==='+'||tokens[i]==='-'||tokens[i]==='*'||tokens[i]==='/'){
                let val2 = stack.pop();
                let val1 = stack.pop();
                let ans = this.evaluate(Number(val1), Number(val2), tokens[i]);
                
                stack.push(ans); 
            }else {
                stack.push(tokens[i]);
            }
        }
        return stack.pop();
    }
    evaluate(val1, val2, operator){
        if(operator==='+') return val1+val2;
        if(operator==='-') return val1-val2;
        if(operator==='*') return val1*val2;
        else return Math.trunc(val1/val2);
    }
}
