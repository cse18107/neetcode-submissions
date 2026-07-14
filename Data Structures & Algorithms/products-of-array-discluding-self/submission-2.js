class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let right  = new Array(nums.length).fill(0);
        right[nums.length-1] = nums[nums.length-1];
        for(let i=nums.length-2;i>=0;i--){  
            right[i]=nums[i]*right[i+1]
        }
        console.log(right)
        let left = [];
        left.push(nums[0]);
        for(let i=1;i<nums.length;i++){
            left.push(nums[i]*left[i-1]);
        }
        console.log(left)
        let ans = new Array(nums.length).fill(0);
        for(let i=0;i<nums.length;i++){
            if(i===0){
                ans[i] = right[1];
            }else if (i===nums.length-1){
                ans[i] = left[nums.length-2];
            }else {
                ans[i] = left[i-1]*right[i+1];
            }
        }
        return ans;
    }
}
