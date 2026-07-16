class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0,
            right = nums.length - 1;

        while (left <= right) {
            let mid = left + Math.floor((right - left) / 2);
            console.log(left, mid, right)
            if(nums[mid]===target) return mid;
            if(nums[mid] >= nums[left]) {
                if(nums[mid] >= target && nums[left]<=target){
                    right = mid-1;
                }else {
                    left = mid+1;
                }
            }else if(nums[mid]<=nums[right]){
                if(nums[mid]<=target && nums[right]>=target){
                    left = mid+1;
                }else {
                    right = mid-1;
                }
            }
            
        }
        return -1;
    }
}
