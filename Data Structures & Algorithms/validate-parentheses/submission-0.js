class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        let opening = ['(', '[', "{"];
        let closing = [')', ']', '}'];
        let brMap = {')':'(', '}':'{',']':'['}
        let sArr = s.split('');
        for(let i =0;i<sArr.length;i++){
            if(i===0 && closing.includes(sArr[i])) return false;
            if(closing.includes(sArr[i]) && brMap[sArr[i]]!==stack[stack.length-1]) return false;
            if(closing.includes(sArr[i]) && brMap[sArr[i]]===stack[stack.length-1]) stack.pop();
            else stack.push(sArr[i]);
        }
        if(stack.length > 0) return false;
        else return true;
    }
}
