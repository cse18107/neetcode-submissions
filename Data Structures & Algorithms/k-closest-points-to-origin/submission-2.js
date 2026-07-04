class Solution {
    kClosest(points, k) {
        const heap = [];

        const getDist = ([x, y]) => x * x + y * y; // no sqrt

        const swap = (i, j) => {
            [heap[i], heap[j]] = [heap[j], heap[i]];
        };

        const heapifyUp = (i) => {
            while (i > 0) {
                let parent = Math.floor((i - 1) / 2);
                if (heap[parent].dist >= heap[i].dist) break;
                swap(parent, i);
                i = parent;
            }
        };

        const heapifyDown = (i) => {
            let n = heap.length;
            while (true) {
                let largest = i;
                let left = 2 * i + 1;
                let right = 2 * i + 2;

                if (left < n && heap[left].dist > heap[largest].dist) {
                    largest = left;
                }
                if (right < n && heap[right].dist > heap[largest].dist) {
                    largest = right;
                }

                if (largest === i) break;
                swap(i, largest);
                i = largest;
            }
        };

        for (let point of points) {
            let dist = getDist(point);

            heap.push({ point, dist });
            heapifyUp(heap.length - 1);

            if (heap.length > k) {
                heap[0] = heap.pop();
                heapifyDown(0);
            }
        }

        return heap.map(item => item.point);
    }
}