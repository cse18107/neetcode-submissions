class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        if(hand.length%groupSize !== 0) return false;
        hand.sort((a, b) => a-b);
        let map = {};

        for(let i=0;i<hand.length;i++){
            if(map[hand[i]]){
                map[hand[i]].push(hand[i]);
            }else{
                map[hand[i]] = [hand[i]];
            }
        }
        
        let countGroups = hand.length/groupSize;
        let countSize = groupSize;

        while(countGroups>0){
            let collectedHands = [];
            for(let key of Object.keys(map)){
                if(collectedHands.length===0){
                    collectedHands.push(map[key].pop());
                    if(map[key].length===0) delete map[key];
                    countSize--;
                }else {
                    let ch = map[key].pop();
                   
                    if(map[key].length===0) delete map[key];
                    if(collectedHands.at(-1)!==ch-1) return false;
                    collectedHands.push(ch);
                    countSize--;
                }
                if(countSize===0) break;
            }
            
            countSize = groupSize;
            countGroups--;
        }
        if(Object.keys(map).length>0) return false;
        return true;
    }
}
