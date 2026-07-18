class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        let totalGas = gas.reduce((acc, curr) => acc+curr);
        let totalCost = cost.reduce((acc, curr) => acc+curr);
        if(totalGas < totalCost) return -1;
        let ans = false;
        for(let i=0;i<gas.length;i++) {
            if(gas[i]>=cost[i]) {
                ans = ans || this.getIfPoss(gas, cost, i);
            }
            if(ans) return i;
        }
        return -1;
    }

    getIfPoss(gas, cost, i) {
        let gasInHand = 0, len = gas.length;
        let currIndex = i;
        let stationCovered = 0;
        console.log(i)
        while(currIndex !== i || stationCovered<gas.length) {
            console.log(gasInHand, currIndex);
            gasInHand +=gas[currIndex];
            if(gasInHand<cost[currIndex]) {
                return false;
            }
            gasInHand-=cost[currIndex];
            currIndex = (currIndex+1)%len;
            stationCovered++;
        }
        return true;
    }
}
