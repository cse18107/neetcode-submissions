class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let processedNums = new Set();
        let numsSet = new Set(nums);
        let maxCount = 0;
        for(let i=0;i<nums.length;i++){
            
            let count = 1;
            let val = nums[i];
            if(processedNums.has(val)) continue;
            while(numsSet.has(val+1)){
                count++;
                processedNums.add(val+1);
                val = val+1
            }
            maxCount = Math.max(maxCount, count);
        }
        return maxCount;
    }
}
