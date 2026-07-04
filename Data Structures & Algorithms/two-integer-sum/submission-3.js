class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let ans = [];
        nums.forEach((val, i) => {
            if(ans.length===0){
                let ind = nums.lastIndexOf(target - val);
                if(ind>=0 && i<ind){
                    ans.push(i);
                    ans.push(ind);
                }
            }
        }) 
        return ans;
    }
}
