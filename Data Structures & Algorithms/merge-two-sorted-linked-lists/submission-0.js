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
        let newListNode = new ListNode(-101);
        let head1 = list1, head2 = list2, head3 = newListNode;
        while(head1!==null && head2!==null){
            if(head1.val<=head2.val) {
                head3.next = head1;
                head1 = head1.next;
            }else {
                head3.next = head2;
                head2 = head2.next;
            }
            head3 = head3.next;
        }
                    while(head1!==null){
                head3.next = head1;
                head1 = head1.next;
                head3 = head3.next;
            }
            while(head2!==null){
                head3.next = head2;
                head2 = head2.next;
                head3 = head3.next;
            }
        return newListNode.next;
    }
}
