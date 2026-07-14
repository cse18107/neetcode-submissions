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
     * @return {ListNode}
     */
    reverseList(head) {
        let h = null, prev = null, next= head;
        while(next!=null){
            h = next;
            next = next.next;
            h.next = prev;
            prev = h;
        }
        return h;
    }
}
