class Solution {
    constructor() {
        this.heap = [];
    }

    lastStoneWeight(stones) {
        for (let stone of stones) {
            this.insert(stone);
        }

        while (this.heap.length > 1) {
            let first = this.extractMax();
            let second = this.extractMax();

            if (first !== second) {
                this.insert(first - second);
            }
        }

        return this.heap.length ? this.heap[0] : 0;
    }

    insert(val) {
        this.heap.push(val);
        this.heapifyUp(this.heap.length - 1);
    }

    extractMax() {
        if (this.heap.length === 1) return this.heap.pop();

        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);

        return max;
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

            if (left < n && this.heap[left] > this.heap[largest]) {
                largest = left;
            }

            if (right < n && this.heap[right] > this.heap[largest]) {
                largest = right;
            }

            if (largest === i) break;

            [this.heap[i], this.heap[largest]] = [this.heap[largest], this.heap[i]];
            i = largest;
        }
    }
}