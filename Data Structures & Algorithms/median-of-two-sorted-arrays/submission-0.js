class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        const total = nums1.length + nums2.length;
        const re = Math.floor(total / 2);
        let ans;

        if (total === 2) {
            let sum = 0;
            for (let num of nums1) sum += num;
            for (let num of nums2) sum += num;
            return sum / 2;
        }

        if (total === 1) {
            return nums1.length > nums2.length ? nums1[0] : nums2[0];
        }

        if (nums1.length > nums2.length) {
            ans = this.search(nums2, nums1, re, total);
        } else {
            ans = this.search(nums1, nums2, re, total);
        }

        let res = 0;
        for (let num of ans) {
            res += num;
        }

        return total % 2 === 0 ? res / 2 : res;
    }

    search(arr1, arr2, re, total) {
        let start = 0;
        let end = arr1.length;

        while (start <= end) {
            const mid = start + Math.floor((end - start) / 2);

            const mid1 = mid;
            const mid2 = re - mid;

            const l1 = mid1 - 1 < 0 ? -Infinity : arr1[mid1 - 1];
            const r1 = mid1 >= arr1.length ? Infinity : arr1[mid1];

            const l2 = mid2 - 1 < 0 ? -Infinity : arr2[mid2 - 1];
            const r2 = mid2 >= arr2.length ? Infinity : arr2[mid2];

            if (l1 <= r2 && l2 <= r1) {
                if (total % 2 === 0) {
                    const n1 = Math.max(l1, l2);
                    const n2 = Math.min(r1, r2);
                    return [n1, n2];
                } else {
                    const n1 = Math.min(r1, r2);
                    return [n1];
                }
            }

            if (l1 > r2) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }

        return [0];
    }
}
