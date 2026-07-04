class Solution {

    /**
     * @param {number[]} stones
     * @return {number}
     */
    constructor() {
        this.maxHeap = [];
    }
    lastStoneWeight(stones) {
        for(let i=0;i<stones.length;i++){
            this.add(stones[i]);
        }
        while(this.maxHeap.length>1){
            let first = this.maxHeap.pop();
            let second = this.maxHeap.pop();

            let diff = Math.abs(first-second);
            console.log(diff);
            if(diff>0) this.add(diff);
        }

        return this.maxHeap.pop()??0;
    }

    add(val) {
        this.maxHeap.push(val);
        this.hippify();
        console.log(this.maxHeap)
    }

    hippify() {
        const top = this.maxHeap.pop();
        let helper = [],
            topInd = this.maxHeap.length - 1;
        while (top < this.maxHeap[topInd]) {
            helper.push(this.maxHeap.pop());
            topInd = this.maxHeap.length - 1;
        }
        this.maxHeap.push(top);
        while (helper.length > 0) {
            this.maxHeap.push(helper.pop());
        }
        
    }
}
