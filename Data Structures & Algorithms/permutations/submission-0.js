class Solution {
    constructor() {
        this.allPermutations = [];
    }
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let selected = new Array(nums.length).fill(false);
        this.getAllPermutations([], nums, selected)
        return this.allPermutations;
    }

    getAllPermutations(permutation, nums, selected){
        if(permutation.length===nums.length) {
            this.allPermutations.push([...permutation]);
            return;
        }
        for(let i=0;i<selected.length;i++){
            if(!selected[i]){
       
                permutation.push(nums[i]);
              
                selected[i]=true;
                this.getAllPermutations(permutation, nums, selected);
                selected[i]=false;
                
                permutation.pop(); 
            }
        }
    }
}
