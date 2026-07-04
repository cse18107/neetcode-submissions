class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left=0,right=nums.length-1, min=1000, minInd = -1;
        while(left<right){
            let mid = Math.trunc(left+ (right-left)/2);
            if(nums[mid]>nums[right]){
                
                left = mid+1;
            }else {
                
                right=mid;
            }
        }
        return nums[right];
    }
}
