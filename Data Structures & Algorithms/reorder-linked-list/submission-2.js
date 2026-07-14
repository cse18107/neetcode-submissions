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
     * @return {void}
     */
    reorderList(head) {
        if(head.next===null) return head;
        let first = head,
            slow = head,
            prev = null;
        while (first !== null && first.next !== null) {
            first = first.next.next;
            prev = slow;
            slow = slow.next;
        }
        prev.next = null;
        let rev = slow;
        let h = null,
            tail = null,
            next = rev;
        while (next !== null) {
            h = next;
            next = next.next;
            h.next = tail;
            tail = h;
        }

        rev = h;

        let temp1 = head;
        let temp2 = rev;
        let counter = 0;
        let res = new ListNode(-1);
        let temp = res;
        while (temp1 !== null && temp2 !== null) {
            if (counter === 0) {
                temp.next = temp1;
                temp1 = temp1.next;
                temp = temp.next;
                temp.next = null;
                counter=1;
            } else {
                temp.next = temp2;
                temp2 = temp2.next;
                temp = temp.next;
                temp.next = null;
                counter = 0;
            }
        }

        while (temp1 !== null) {
            temp.next = temp1;
            temp1 = temp1.next;
            temp = temp.next;
            temp.next = null;
        }
        while (temp2 !== null) {
            temp.next = temp2;
            temp2 = temp2.next;
            temp = temp.next;
            temp.next = null;
        }
        return res.next;
    }
}
