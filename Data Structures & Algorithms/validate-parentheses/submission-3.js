class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        let sArr = s.split("");
        for(let i=0;i<sArr.length;i++){
            if(sArr[i]===')'){
                if(stack[stack.length-1]!=='(') return false;
                else stack.pop();
            }else if(sArr[i]==='}'){
                if(stack[stack.length-1]!=='{') return false;
                else stack.pop();
            }else if(sArr[i]===']'){
                if(stack[stack.length-1]!=='[') return false;
                else stack.pop();
            }else {
                stack.push(sArr[i]);
            }
        }
        if(stack.length>0)return false;
        return true;
    }
}
