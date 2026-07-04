class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        for(let i=0;i<nums.length;i++){
            let ind = Math.abs(nums[i]);
            console.log(nums)
            if(nums[ind]<0){
                
                return ind;

            }
            else {
                nums[ind] = -nums[ind];
                // console.log(nums[ind])
            }
        }
        return 0
    }
}
