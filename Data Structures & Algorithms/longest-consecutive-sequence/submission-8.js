class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length===0) return 0;
        nums.sort((a,b) => a-b);
        console.log(nums)
        let maxLength=1;
        let length = 1;
        let first = nums[0];
        let i=1;
        while(i<nums.length && nums[i]===nums[i-1])i++;

        while(i<nums.length){
            console.log(first, i)
            if(nums[i]-1===first){
                length++;
                first = nums[i]
                i++;
                while(i<nums.length && nums[i]===nums[i-1])i++;
            }else {
                maxLength = Math.max(maxLength, length);
                length=1;
                first=nums[i];
                i++;
                while(i<nums.length && nums[i]===nums[i-1])i++;
            }
            
        }
        return Math.max(maxLength, length);
    }
}
