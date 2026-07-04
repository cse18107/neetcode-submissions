class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        const operator = ['+', '-', '*', '/'];
        const tokenArr = tokens;
        for(let i=0;i<tokenArr.length;i++){
            if(operator.includes(tokenArr[i])){
                const v2 = Number(stack.pop());
                const v1 = Number(stack.pop());
                const val = this.execute(v1, v2, tokenArr[i]);
                stack.push(val);
            }else stack.push(tokenArr[i]);
        }
        return stack[0];
    }
    execute(v1, v2, operator) {
        if(operator==='+'){
            return v1+(v2);
        }else if(operator==='-'){
            return v1-(v2);
        }else if(operator==='*'){
            return v1*(v2);
        }else {
            return Math.trunc(v1/v2);
        }
    }
}
