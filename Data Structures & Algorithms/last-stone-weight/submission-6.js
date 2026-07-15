class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */

    constructor() {
        this.heap = [];
    }
    lastStoneWeight(stones) {
        for (let i = 0; i < stones.length; i++) {
            this.add(stones[i]);
        }

        let stone1 = null;
        let stone2 = null;
        while (this.heap.length > 1) {
            // console.log(this.heap)
            if (!stone1) {
                stone1 = this.getStone();
            }
            if (!stone2) {
                stone2 = this.getStone();
            }
            // console.log(stone1, stone2, this.heap)
            let weightDiff = Math.abs(stone1 - stone2);
            stone1 = null;
            stone2 = null;
            if (weightDiff > 0) {
                this.add(weightDiff);
            }
        }
        return this.heap[0]?this.heap[0]:0;
    }

    getStone() {
        let stone = this.heap[0];
        if (this.heap.length > 1) {
            this.heap[0] = this.heap.pop();
            this.heapifyDown(0);
        }else this.heap.pop()
        console.log(this.heap);
        return stone;
    }

    add(val) {
        this.heap.push(val);
        this.heapifyUp(this.heap.length - 1);
    }

    heapifyUp(i) {
        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);
            if (this.heap[parent] >= this.heap[i]) break;
            [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
            i = parent;
        }
    }

    heapifyDown(i) {
        let n = this.heap.length;
        while (true) {
            let largest = i;
            let left = 2 * i + 1;
            let right = 2 * i + 2;

            if (left < n && this.heap[largest] < this.heap[left]) {
                largest = left;
            }

            if (right < n && this.heap[largest] < this.heap[right]) {
                largest = right;
            }

            if (largest === i) break;

            [this.heap[largest], this.heap[i]] = [this.heap[i], this.heap[largest]];

            i = largest;
        }
    }
}
