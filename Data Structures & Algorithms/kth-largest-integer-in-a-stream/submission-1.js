class KthLargest {
    constructor(k, nums) {
        this.k = k;
        this.heap = [];

        for (let num of nums) {
            this.add(num);
        }
    }

    add(val) {
        this.heap.push(val);
        this.heapifyUp(this.heap.length - 1);

        // keep only k elements
        if (this.heap.length > this.k) {
            this.heap[0] = this.heap.pop();
            this.heapifyDown(0);
        }

        return this.heap[0];
    }

    heapifyUp(i) {
        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);
            if (this.heap[parent] <= this.heap[i]) break;

            [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
            i = parent;
        }
    }

    heapifyDown(i) {
        let n = this.heap.length;

        while (true) {
            let smallest = i;
            let left = 2 * i + 1;
            let right = 2 * i + 2;

            if (left < n && this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }

            if (right < n && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }

            if (smallest === i) break;

            [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
            i = smallest;
        }
    }
}