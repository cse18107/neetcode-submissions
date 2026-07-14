class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        let left = 0,
            right = nums.length - 1,
            mid = 1;
        let ans = [];
        console.log(nums);
        while (left < nums.length - 2) {
            let sum = nums[left] + nums[mid] + nums[right];
            if (sum === 0) {
                ans.push([nums[left], nums[mid], nums[right]]);
                mid++;
                while (mid < right && nums[mid] === nums[mid - 1]) mid++;
                right--;
                while (mid < right && nums[right] === nums[right + 1]) right--;
            }else if (sum>0){
                right--;
                while (mid < right && nums[right] === nums[right + 1]) right--;
            }else if(sum<0){
                mid++;
                while (mid < right && nums[mid] === nums[mid - 1]) mid++;
            }if(mid>=right) {
                left++;
                while (left < nums.length-2 && nums[left] === nums[left - 1]) left++;
                mid = left+1;
                right = nums.length-1;
            }
        }
        return ans;
    }
}
