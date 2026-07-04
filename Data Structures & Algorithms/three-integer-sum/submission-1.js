class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b)=> a-b);
        let n=nums.length;
        let result = [];
        for(let i=0;i<n-2;i++){
             
        if (i > 0 && nums[i] === nums[i - 1]) continue;

            let k = nums.length-1, j=i+1;
            while(j<k){
            const sum = nums[i]+nums[j]+nums[k];
            if(sum===0){
                result.push([nums[i], nums[j], nums[k]]);
                while(j<k && nums[j]===nums[j+1])j++;
                while(j<k && nums[k]===nums[k-1])k--;
                j++;
                k--;
            }else if(sum<0){
                j++;
            }else{
                k--;
            }
            }
        }
        return result;
    }
}
