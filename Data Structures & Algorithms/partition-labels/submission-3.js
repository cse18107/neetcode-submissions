class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {
        let endInd = {};
        for (let i = 0; i < S.length; i++) {
            endInd[S.charAt(i)] = i;
        }
        
        let ans = [];

        let start = 0,
            maxEnd = -1;

        for (let i = 0; i < S.length; i++) {
            
            if (maxEnd === -1) {
                maxEnd = endInd[S.charAt(i)];
                if(i===maxEnd){
                    
                    ans.push(1);
                    start = maxEnd+1;
                    maxEnd=-1;
                }
            }else {
                if(maxEnd === i){
                    
                    ans.push(maxEnd-start+1);
                    start = maxEnd+1;
                    maxEnd = -1;
                } else {
                    maxEnd = Math.max(maxEnd, endInd[S.charAt(i)]);
                }
            }
        }

        return ans;
    }
}
