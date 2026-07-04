class Solution {
    reorderList(head) {
        if (!head || !head.next) return;

        // 1. Find middle
        let slow = head, fast = head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // 2. Reverse second half
        const reverse = (node) => {
            let prev = null;
            while (node) {
                let next = node.next;
                node.next = prev;
                prev = node;
                node = next;
            }
            return prev;
        };

        let second = reverse(slow.next);
        slow.next = null; // split

        // 3. Merge
        let first = head;

        while (second) {
            let temp1 = first.next;
            let temp2 = second.next;

            first.next = second;
            second.next = temp1;

            first = temp1;
            second = temp2;
        }
    }
}