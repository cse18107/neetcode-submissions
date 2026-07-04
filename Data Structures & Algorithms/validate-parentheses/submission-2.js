class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const sArr = s.split("");
        const closingBr = [')','}',']'];
        const brMap = {')':'(', '}':'{',']':'['};

        const stack = [];
        for(let i=0;i<sArr.length;i++){
            if(closingBr.includes(sArr[i]) && stack.length===0) return false;
            else if(closingBr.includes(sArr[i]) && stack[stack.length-1]!==brMap[sArr[i]]) return false;
            else if(closingBr.includes(sArr[i]) && stack[stack.length-1]===brMap[sArr[i]])stack.pop();
            else stack.push(sArr[i]);
        }
        if(stack.length>0) return false;
        return true;
    }
}
