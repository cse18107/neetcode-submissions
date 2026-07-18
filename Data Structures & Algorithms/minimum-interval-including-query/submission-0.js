class MinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }

    push(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();

        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return top;
    }

    bubbleUp() {
        let i = this.heap.length - 1;

        while (i > 0) {
            let p = Math.floor((i - 1) / 2);

            if (this.heap[p][0] <= this.heap[i][0]) break;

            [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
            i = p;
        }
    }

    bubbleDown() {
        let i = 0;

        while (true) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let smallest = i;

            if (
                left < this.heap.length &&
                this.heap[left][0] < this.heap[smallest][0]
            ) {
                smallest = left;
            }

            if (
                right < this.heap.length &&
                this.heap[right][0] < this.heap[smallest][0]
            ) {
                smallest = right;
            }

            if (smallest === i) break;

            [this.heap[i], this.heap[smallest]] = [
                this.heap[smallest],
                this.heap[i],
            ];

            i = smallest;
        }
    }
}

class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} queries
     * @return {number[]}
     */
    minInterval(intervals, queries) {
        intervals.sort((a, b) => a[0] - b[0]);

        const sortedQueries = queries.map((q, i) => [q, i]);
        sortedQueries.sort((a, b) => a[0] - b[0]);

        const heap = new MinHeap();
        const ans = new Array(queries.length).fill(-1);

        let i = 0;

        for (const [query, idx] of sortedQueries) {

            // Add all intervals that have started
            while (i < intervals.length && intervals[i][0] <= query) {
                const [left, right] = intervals[i];
                heap.push([right - left + 1, right]);
                i++;
            }

            // Remove intervals that already ended
            while (heap.size() && heap.peek()[1] < query) {
                heap.pop();
            }

            if (heap.size()) {
                ans[idx] = heap.peek()[0];
            }
        }

        return ans;
    }
}