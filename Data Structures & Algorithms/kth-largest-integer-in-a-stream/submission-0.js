class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.minHeap = [];
        this.k = k;
        for(let i=0;i<nums.length;i++){
            this.add(nums[i]);
        }
        
        console.log(this.minHeap)
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.minHeap.push(val);
        this.hippify();
        
        return this.minHeap[this.minHeap.length-1];
    }

    hippify(){
        const top = this.minHeap.pop();
        let helper = [], topInd = this.minHeap.length-1;
        while(top>this.minHeap[topInd]){
            helper.push(this.minHeap.pop());
            topInd = this.minHeap.length-1;
        }
        this.minHeap.push(top);
        while(helper.length>0){
            this.minHeap.push(helper.pop());
        }
        while(this.minHeap.length>this.k) this.minHeap.pop();
        console.log(this.minHeap)
    }
}
