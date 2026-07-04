class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(!nums.length) return 0;
        const mapSeq = {};
        nums.forEach((num)=> {
            mapSeq[num] =true;
        })

        for(let key of Object.keys(mapSeq)){
            
            if(nums.includes(Number(key)-1)) mapSeq[key] = false;
        }

        let maxAns = 1, ans = 1;
        console.log(mapSeq)

        for(let key of Object.keys(mapSeq)){
            let num = Number(key);
            if(mapSeq[key]){
                while(nums.includes(num+1)){
                    ans++;
                    num = num+1;
                }
                maxAns = Math.max(maxAns, ans);
                ans = 1;
            }
        }
        return maxAns;
    }
}
