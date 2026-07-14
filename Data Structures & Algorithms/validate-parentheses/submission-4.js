class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let len = s.length;
        let stack = [];
        let bracketMap = {")":"(", "}":"{", "]":"["};
        for(let i=0;i<len;i++) {
            
            if(s[i]==='('||s[i]==='{'||s[i]==='['){
                stack.push(s[i]);
            }else {
              
                if(stack[stack.length-1]!==bracketMap[s[i]])return false;
                stack.pop();
            }
            
        }
        if(stack.length>0) return false;
        return true;
    }
}
