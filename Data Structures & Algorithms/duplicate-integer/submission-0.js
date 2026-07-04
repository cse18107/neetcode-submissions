class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let ans = false
        nums.forEach((num, i) => {
            let ind =nums.lastIndexOf(num)
            if(i<ind) ans = true

        })
        return ans;
    }
}
