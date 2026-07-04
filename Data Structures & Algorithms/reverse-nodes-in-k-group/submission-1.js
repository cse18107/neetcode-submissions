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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        if(k===1) return head;
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

        function devideGroup(head, k) {
            let h = head, th= null, abh = null, prevTail = null,
                i = 1;
            while (i < k && h && h.next) {
                if(i===1)th=h;
                h = h.next;
                i++;
                if (i === k) {
                    console.log(h.val, th.val)
                    const nextHead = h.next;
                    h.next = null;
                    const rh = reverse(th);
                    console.log(rh.val)
                    if(abh===null) abh=rh;
                    if(prevTail===null) prevTail = th;
                    else {
                        prevTail.next = rh;
                        prevTail = th;
                    }
                    th.next = nextHead;
                    i=1;
                    h=nextHead;
                }
            }
            return abh;
        }

        return devideGroup(head, k);
    }
}
