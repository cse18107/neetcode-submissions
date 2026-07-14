class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqMap = {};
        for(let i=0;i<nums.length;i++){
            let val = String(nums[i]);
            freqMap[val] = freqMap[val]?freqMap[val]+1:1;
        }
        let bucket = Array.from({length: nums.length+1}, () => []);
        for(let key of Object.keys(freqMap)){
            let freq = freqMap[key];
            bucket[freq].push(Number(key));
        }
        console.log(bucket)
        let ans = []
        for(let i=bucket.length-1;i>=0;i--){
            if(bucket[i].length===0) continue;
            for(let j=0;j<bucket[i].length;j++){
                ans.push(bucket[i][j])
                if(ans.length===k) return ans;
            }
            
            console.log(ans)
        }
        return [];
    }
}
