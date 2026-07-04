class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left =0, right=nums.length-1;
        while(left<right){
            let mid = Math.trunc(left+(right-left)/2);
            if(nums[mid]>nums[right]){
                left=mid+1;
            }else {
                right=mid;
            }
        }
        
        

        function getIndex(l1, r1){
            while(l1<=r1){
                let mid = Math.trunc(l1+(r1-l1)/2);
                if(target===nums[mid]) return mid;
                if(target>nums[mid]){
                    l1=mid+1;
                }else{
                    r1=mid-1;
                }
            }
            return -1;
        }
        console.log(right)
        let res1 = getIndex(0, right-1);
        let res2 = getIndex(right, nums.length-1);

        if(res1===-1&&res2===-1) return -1;
        return res1===-1?res2:res1;
    }
}
