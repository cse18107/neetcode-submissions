class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
    mergeTriplets(triplets, target) {
        let filteredTriplets = triplets.filter((arr) => target[0]>=arr[0]&&target[1]>=arr[1]&&target[2]>=arr[2]);
        console.log(filteredTriplets);
        let cTarget = [-Infinity, -Infinity, -Infinity];

        for(let i=0;i<filteredTriplets.length;i++){
            cTarget[0] = Math.max(cTarget[0], filteredTriplets[i][0]);
            cTarget[1] = Math.max(cTarget[1], filteredTriplets[i][1]);
            cTarget[2] = Math.max(cTarget[2], filteredTriplets[i][2]);
        }   

        console.log(cTarget);

        return cTarget[0]===target[0] && cTarget[1]===target[1]&& cTarget[2]===target[2];
    }
}
