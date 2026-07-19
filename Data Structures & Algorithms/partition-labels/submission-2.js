class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {
        let lastIndexMap = {}
        for(let char of S){
            if(!lastIndexMap[char]){
                let lastIndex = S.lastIndexOf(char);
                lastIndexMap[char] = lastIndex;
            }
        }
        // console.log(lastIndexMap)
        let currentLastIndex=0;
        let ans = [];
        let tempString = S
        let startIndex = 0;
        for(let i=0;i<S.length;i++){
            let char = S[i];
            let lastIndex = lastIndexMap[char];
            console.log(char,startIndex, lastIndex, currentLastIndex);
            if(lastIndex>currentLastIndex){
                currentLastIndex = lastIndex;
            }else if(i===currentLastIndex){
                ans.push(i-startIndex+1);
                currentLastIndex = i+1;
                startIndex = i+1;
            }
        }
        return ans;
    }
}
