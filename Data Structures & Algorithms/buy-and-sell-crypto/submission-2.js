class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let n = prices.length;
        let left = new Array(n).fill(0);
        let right = new Array(n).fill(0);
        left[0] = prices[0];
        for(let i=1;i<n;i++){
            left[i] = Math.min(left[i-1], prices[i]);
        }
        right[n-1] = prices[n-1];
        for(let j=n-2;j>=0;j--){
            right[j] = Math.max(right[j+1], prices[j]);
        }
        let maxProfit = -Infinity;
        for(let i=0;i<n;i++){
            maxProfit = Math.max(maxProfit, right[i]-left[i]);
        }
        return maxProfit;
    }
}
