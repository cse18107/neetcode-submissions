/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        if(!head.next) return null;
        function reverse(head) {
            let prev = null,
                curr = null,
                next = head;
            while (next !== null) {
                curr = next;
                next = next.next;
                curr.next = prev;
                prev = curr;
            }
            return curr;
        }
        let revList = reverse(head);
        let i = 1,
            rh = revList,
            rhp = null;
        console.log(revList.next.val)
        if (n === 1) revList = revList.next;
        else {
            while (i !== n) {
                rhp = rh;
                rh = rh.next;
                i++
            }
            console.log(rh.val);
            rhp.next = rh.next;
        }

        return reverse(revList)||null;
    }
}
