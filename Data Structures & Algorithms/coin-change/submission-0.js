class Solution {
    constructor() {
        this.coins = []
    }
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        let res = this.getNumCoins(coins, coins.length-1, amount, 0);
        return res===Infinity?-1: res
    }
    getNumCoins(coins, ind, amount, coin){
        if(amount===0){
            return coin;
        }
        if(amount<0 || ind<0) return +Infinity;

        return Math.min(this.getNumCoins(coins, ind, amount-coins[ind], coin+1) , this.getNumCoins(coins, ind-1, amount, coin));
    }
}
