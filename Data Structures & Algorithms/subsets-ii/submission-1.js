class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        let ans = [];
        nums.sort((a, b)=> a-b)
        let dup = {}
        this.generateSubset(nums, 0, ans, []);
        return ans;
    }

    generateSubset(nums, i, ans, cons){
        if(i===nums.length){
            ans.push([...cons]);
            return;
        }
        cons.push(nums[i]);

        this.generateSubset(nums, i+1, ans, cons);
        i++
        while(i<nums.length && nums[i]===nums[i-1]){
            i++;
        }
        cons.pop();
        this.generateSubset(nums, i, ans, cons)

    }
}
