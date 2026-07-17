class Solution {
    constructor() {
        this.nemo = null;
    }
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if(nums.length===1) return nums[0];
        this.nemo = new Array(nums.length).fill(-1);
        let first = this.getMaxMoney(nums.length - 2, nums.slice(0, nums.length - 1));
        this.nemo = new Array(nums.length).fill(-1);
        let sec = this.getMaxMoney(nums.length - 2, nums.slice(1, nums.length));
        return Math.max(first, sec);
    }

    getMaxMoney(house, nums) {
        console.log(nums);
        if (house < 0) return 0;
        if (this.nemo[house] !== -1) return this.nemo[house];
        let rob = nums[house] + this.getMaxMoney(house - 2, nums);
        let skip = this.getMaxMoney(house - 1, nums);

        return (this.nemo[house] = Math.max(rob, skip));
    }
}
