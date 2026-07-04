class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        // Step 1: count frequencies
        const freq = new Array(26).fill(0);
        for (let t of tasks) {
            freq[t.charCodeAt(0) - 65]++;
        }

        // Step 2: build max heap
        const heap = new MaxHeap();
        for (let f of freq) {
            if (f > 0) heap.insert(f);
        }

        const cooldown = []; // [remainingCount, readyTime]
        let time = 0;

        // Step 3: simulate
        while (heap.size() > 0 || cooldown.length > 0) {
            time++;

            // execute most frequent task
            if (heap.size() > 0) {
                let count = heap.extractMax();
                count--;

                if (count > 0) {
                    cooldown.push([count, time + n]);
                }
            }

            // bring back from cooldown
            if (cooldown.length > 0 && cooldown[0][1] === time) {
                heap.insert(cooldown.shift()[0]);
            }
        }

        return time;
    }
}

class MaxHeap {
    constructor() {
        this.heap = [];
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
            let p = Math.floor((i - 1) / 2);
            if (this.heap[p] >= this.heap[i]) break;

            [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
            i = p;
        }
    }

    heapifyDown(i) {
        let n = this.heap.length;

        while (true) {
            let largest = i;
            let l = 2 * i + 1;
            let r = 2 * i + 2;

            if (l < n && this.heap[l] > this.heap[largest]) largest = l;
            if (r < n && this.heap[r] > this.heap[largest]) largest = r;

            if (largest === i) break;

            [this.heap[i], this.heap[largest]] = [this.heap[largest], this.heap[i]];
            i = largest;
        }
    }

    size() {
        return this.heap.length;
    }
}
