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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let head = new ListNode(-1);
        let temp1 = list1,
            temp2 = list2;

        let temp = head;

        while (temp1 !== null && temp2 !== null) {
            if (temp1.val <= temp2.val) {
                temp.next = temp1;
                temp1 = temp1.next;
                temp = temp.next;
                temp.next = null;
            } else {
                temp.next = temp2;
                temp2 = temp2.next;
                temp = temp.next;
                temp.next = null;
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

        return head.next;
    }
}
