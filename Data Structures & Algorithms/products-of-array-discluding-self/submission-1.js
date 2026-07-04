class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        if(nums.length===1) return [...nums];
        let left = Array(nums.length).fill(0);
        left[0] = nums[0]
        for(let i=1;i<nums.length;i++){
            left[i] = left[i-1]*nums[i];
        }

        let right = Array(nums.length).fill(0);
        right[nums.length-1] = nums[nums.length-1];
        for(let i=nums.length-2;i>=0;i--){
            right[i] = right[i+1]*nums[i];
        }

        let ans = [];
        for(let i=0;i<nums.length;i++){
            if(i===0) ans[i] = right[i+1];
            else if(i===nums.length-1) ans[i] = left[i-1];
            else ans[i] = left[i-1] * right[i+1];
        }
        return ans;
    }
}
