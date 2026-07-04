class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let prefix = [], sufix = new Array(height.length);

        for(let i=0;i<height.length;i++){
            if(i===0) prefix.push(height[i]);
            else prefix.push(Math.max(prefix[i-1], height[i]));
        }

        for(let i=height.length-1;i>=0;i--){
            if(i===height.length-1) sufix[i] = height[i];
            else sufix[i]=Math.max(sufix[i+1], height[i]);
        }
        console.log(prefix, sufix);
        let sum = 0;
        for(let i=0;i<height.length;i++){
            sum+= Math.min(prefix[i], sufix[i])-height[i];
        }

        return sum;
    }
}
