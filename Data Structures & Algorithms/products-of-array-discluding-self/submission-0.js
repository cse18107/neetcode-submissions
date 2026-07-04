class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        if(nums.length===1) return nums;
        let leftProd = Array(nums.length).fill(1);
        for(let i=0;i<nums.length;i++){
            if(i===0)leftProd[i]=nums[i];
            else {
                leftProd[i] = nums[i]*leftProd[i-1];
            }
        }
        let rightProd = Array(nums.length).fill(1);
        for(let i=nums.length-1;i>=0;i--){
            if(i===nums.length-1)rightProd[i]=nums[i];
            else{
                rightProd[i]=nums[i]*rightProd[i+1];
            }
        }
        console.log(leftProd, rightProd);
        let res =[];
        for(let i=0;i<nums.length;i++){
            if(i===0){
                res.push(rightProd[i+1]);
            }else if(i==nums.length-1){
                res.push(leftProd[i-1]);
            }else{
                res.push(leftProd[i-1]*rightProd[i+1]);
            }
        }
        return res;
    }
}
