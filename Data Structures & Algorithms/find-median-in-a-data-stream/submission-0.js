class MedianFinder {
    constructor() {
        this.left = new MaxHeap(); // smaller half
        this.right = new MinHeap(); // larger half
    }

    addNum(num) {
        // Step 1: push into max heap
        this.left.insert(num);

        // Step 2: balance order (ensure left ≤ right)
        this.right.insert(this.left.extractMax());

        // Step 3: maintain size property
        if (this.right.size() > this.left.size()) {
            this.left.insert(this.right.extractMin());
        }
    }

    findMedian() {
        if (this.left.size() > this.right.size()) {
            return this.left.peek();
        }

        return (this.left.peek() + this.right.peek()) / 2;
    }
}

class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(val) {
        this.heap.push(val);
        this.up(this.heap.length - 1);
    }

    extractMin() {
        if (this.heap.length === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.down(0);
        return min;
    }

    up(i) {
        while (i > 0) {
            let p = Math.floor((i - 1) / 2);
            if (this.heap[p] <= this.heap[i]) break;
            [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
            i = p;
        }
    }

    down(i) {
        let n = this.heap.length;
        while (true) {
            let smallest = i;
            let l = 2 * i + 1;
            let r = 2 * i + 2;

            if (l < n && this.heap[l] < this.heap[smallest]) smallest = l;
            if (r < n && this.heap[r] < this.heap[smallest]) smallest = r;

            if (smallest === i) break;

            [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
            i = smallest;
        }
    }

    peek() {
        return this.heap[0];
    }
    size() {
        return this.heap.length;
    }
}

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    insert(val) {
        this.heap.push(val);
        this.up(this.heap.length - 1);
    }

    extractMax() {
        if (this.heap.length === 1) return this.heap.pop();
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.down(0);
        return max;
    }

    up(i) {
        while (i > 0) {
            let p = Math.floor((i - 1) / 2);
            if (this.heap[p] >= this.heap[i]) break;
            [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
            i = p;
        }
    }

    down(i) {
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

    peek() {
        return this.heap[0];
    }
    size() {
        return this.heap.length;
    }
}
