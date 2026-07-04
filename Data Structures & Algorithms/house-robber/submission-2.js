class Solution {
    constructor() {
        this.nemo = null;
    }
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        this.nemo = new Array(nums.length).fill(-1);
        return this.getMaxMoney(nums.length-1, nums);
    }

    getMaxMoney(house, nums){
        if(house<0) return 0;
        if(this.nemo[house]!==-1) return this.nemo[house];
        let rob = nums[house] + this.getMaxMoney(house-2, nums);
        let skip = this.getMaxMoney(house-1, nums);

        return this.nemo[house]=Math.max(rob, skip)
    }
}
