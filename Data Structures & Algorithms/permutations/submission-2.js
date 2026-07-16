class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let ans = []
        let vis = new Array(nums.length).fill(false);
        this.generatePermute(nums, ans, vis, []);
        return ans;
    }
    generatePermute(nums, ans, vis, cons){
        if(cons.length===nums.length){
            ans.push([...cons]);
            return;
        }
        for(let i=0;i<nums.length;i++){
            if(vis[i]) continue;
            vis[i] = true;
            cons.push(nums[i]);
            this.generatePermute(nums, ans, vis, cons);
            cons.pop();
            vis[i] = false;
        }
    }
}
