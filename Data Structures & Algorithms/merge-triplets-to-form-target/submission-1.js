class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
    mergeTriplets(triplets, target) {
        for (let i = 0; i < triplets.length; i++) {
            if(i>=triplets.length) continue;
            // console.log(i, triplets)
            for (let j = 0; j < 3; j++) {
                
                if (target[j] < triplets[i][j]) {
                    
                    triplets.splice(i, 1);
                    break;
                }
            }
        }
      
        if (triplets.length === 0) return false;
        let presentTriCount = 0;

        for (let j = 0; j < 3; j++) {
            for (let i = 0; i < triplets.length; i++) {
                if (target[j] === triplets[i][j]) {
                    presentTriCount++;
                    console.log(triplets[i][j]);
                    break;
                }
            }
        }
        return presentTriCount === 3;
    }
}
