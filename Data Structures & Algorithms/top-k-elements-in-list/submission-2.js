class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqObj = {};
        for(let i=0;i<nums.length;i++){
            let val = String(nums[i]);
            freqObj[val] = freqObj[val]?freqObj[val]+1:1;
        }
        let bucket = []
        bucket = Array(nums.length+1).fill().map(() => []);
        for(let key of Object.keys(freqObj)){
            let val = freqObj[key];
            bucket[val].push(key);
        }
        console.log(bucket)
        let ans = [];
        for(let i=bucket.length-1;i>=0 && ans.length<k;i--){
            let arr = bucket[i];
            if(arr.length>0){
                let j=0;
                while(j<arr.length && ans.length<k){
                    ans.push(Number(arr[j]));
                    j++
                }
            }
        }
        return ans;
    }
}
