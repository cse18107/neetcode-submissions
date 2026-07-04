class Solution {
    constructor() {
        this.minHeap = [];
    }

    findKthLargest(nums, k) {
        this.k = k;

        for (let num of nums) {
            this.insert(num);
        }

        return this.minHeap[0];
    }

    insert(num) {
        if (this.minHeap.length < this.k) {
            this.minHeap.push(num);
            this.heapifyUp(this.minHeap.length - 1);
        } else if (num > this.minHeap[0]) {
            this.minHeap[0] = num;
            this.heapifyDown(0);
        }
    }

    heapifyUp(i) {
        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);

            if (this.minHeap[parent] <= this.minHeap[i]) break;

            [this.minHeap[parent], this.minHeap[i]] =
                [this.minHeap[i], this.minHeap[parent]];

            i = parent;
        }
    }

    heapifyDown(i) {
        let n = this.minHeap.length;

        while (true) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let smallest = i;

            if (left < n && this.minHeap[left] < this.minHeap[smallest]) {
                smallest = left;
            }

            if (right < n && this.minHeap[right] < this.minHeap[smallest]) {
                smallest = right;
            }

            if (smallest === i) break;

            [this.minHeap[i], this.minHeap[smallest]] =
                [this.minHeap[smallest], this.minHeap[i]];

            i = smallest;
        }
    }
}