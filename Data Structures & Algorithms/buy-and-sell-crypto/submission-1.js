class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let min = 101;
        let minPrice = Array(prices.length).fill(0);
        for(let i =0;i<prices.length;i++){
            if(prices[i]<min){
                min = prices[i];
            }
            minPrice[i] = min
            
        }
        let max = -1;
        let maxPrice = Array(prices.length).fill(0);
        for(let i=prices.length-1;i>=0;i--){
            if(prices[i]>max){
                max = prices[i];
            }
            maxPrice[i] = max;
        }
        let profit = Array(prices.length).fill(0);
        console.log(minPrice, maxPrice)
        let res = 0;
        for(let i=0;i<prices.length;i++){
            if(i!==prices.length-1){
                profit[i] = maxPrice[i+1]-minPrice[i];
                if(profit[i]>res)res = profit[i];
            }
        }
        return res;
    }
}
