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
     * @return {boolean}
     */
    hasCycle(head) {

        let first = head;
        let slow = head;
        while(first!==null && first.next!==null){
            first = first.next.next;
            slow = slow.next;
            if(first === slow) return true;
        }
        return false;
    }
}
