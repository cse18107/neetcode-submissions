class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let processedNums = [];
        let maxCount = 0;
        for(let i=0;i<nums.length;i++){
            
            let count = 1;
            let val = nums[i];
            if(processedNums.includes(val)) continue;
            while(nums.includes(val+1)){
                count++;
                processedNums.push(val+1);
                val = val+1
            }
            maxCount = Math.max(maxCount, count);
        }
        return maxCount;
    }
}
