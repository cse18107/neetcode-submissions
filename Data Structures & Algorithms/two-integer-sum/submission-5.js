class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let left =0, right=nums.length-1;
        let numsInd = [];
        for(let i=0;i<nums.length;i++){
            numsInd.push([nums[i], i]);
        }
        numsInd.sort((a,b) => a[0]-b[0]);
        while(left<right){
            if((numsInd[left][0]+numsInd[right][0])===target) return [numsInd[left][1], numsInd[right][1]];
            if((numsInd[left][0]+numsInd[right][0])>target) right--;
            else left++;
        }
        return [];
    }
}
