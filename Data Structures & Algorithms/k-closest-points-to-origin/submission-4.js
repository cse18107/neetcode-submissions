class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */

    constructor() {
        this.heap = [];
    }
    kClosest(points, k) {
        let n = points.length;
        for (let i = 0; i < n; i++) {
            this.add(points[i]);
        }
        let ans = [];

        for (let i = 0; i < k; i++) {
            ans.push(this.getClosest());
        }
        return ans;
    }

    getClosest() {
        let point = this.heap[0];
        if (this.heap.length > 1) {
            this.heap[0] = this.heap.pop();
            this.heapifyDown(0);
        } else this.heap.pop();

        return point;
    }

    add(value) {
        this.heap.push(value);

        this.heapifyUp(this.heap.length - 1);
    }

    heapifyUp(i) {
        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);
            let parentPoint = this.heap[parent],
                iPoint = this.heap[i];
            if (
                this.getDistance(parentPoint[0], parentPoint[1]) <=
                this.getDistance(iPoint[0], iPoint[1])
            )
                break;
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
            if (
                left < n &&
                this.getDistance(...this.heap[left]) < this.getDistance(...this.heap[smallest])
            ) {
                smallest = left;
            }

            if (
                right < n &&
                this.getDistance(...this.heap[right]) < this.getDistance(...this.heap[smallest])
            ) {
                smallest = right;
            }

            if (smallest === i) break;

            [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]];

            i = smallest;
        }
    }

    getDistance(x, y, x1 = 0, y1 = 0) {
        let dis = (x - x1) * (x - x1) + (y - y1) * (y - y1);
        return dis;
    }
}
