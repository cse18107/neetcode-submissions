class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let stack = [];
        let n = temperatures.length;
        let ans = new Array(n).fill(0);
        for(let i=n-1;i>=0;i--){
            
            if(stack.length===0){
                stack.push(i);
                ans[i] = 0;
            }
            else{
                while(stack.length>0 && temperatures[stack[stack.length-1]]<=temperatures[i]){
                    stack.pop();
                }
                if(stack.length===0){
                    stack.push(i);
                    ans[i] = 0;
                }else{
                    ans[i] = stack[stack.length-1] - i;
                    stack.push(i);
                }
                
            }
        }
        return ans;
    }
}
