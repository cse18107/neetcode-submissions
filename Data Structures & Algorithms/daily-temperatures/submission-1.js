class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let monotonicStack = [];
        let result = new Array(temperatures).fill(0);
        for(let i=temperatures.length-1;i>=0;i--){
            while(monotonicStack.length>0 && temperatures[i]>=temperatures[monotonicStack[monotonicStack.length-1]]){
                monotonicStack.pop()
            }
            if(monotonicStack.length===0){
                result[i] = 0;
                monotonicStack.push(i);
            }else {
                result[i] = monotonicStack[monotonicStack.length-1] - i;
                monotonicStack.push(i); 
            }
        }
        return result;
    }
}
