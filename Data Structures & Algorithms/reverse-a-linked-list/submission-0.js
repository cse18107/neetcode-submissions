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
        let prev= null, curr= null, next=head;
        while(next!==null){
            curr = next;
            next = next.next;
            curr.next = prev;
            prev = curr;
        }
        return curr;
    }
}
