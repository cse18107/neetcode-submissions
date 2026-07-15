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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
  if(!lists || lists.length===0) return null

        function mergeList(ll1, ll2) {

            let node = new ListNode(-1);
            let hll1 = ll1, hll2 = ll2, hn = node;
            while(hll1!==null && hll2!==null){
                if(hll1.val>hll2.val){
                    hn.next = new ListNode(hll2.val);
                    hn = hn.next
                    hll2 = hll2.next;
                }else {
                    hn.next = new ListNode(hll1.val);
                    hn = hn.next;
                    hll1 = hll1.next;
                }
            }

            while(hll1!==null){
                hn.next = new ListNode(hll1.val);
                hll1 = hll1.next;
                hn = hn.next;
            }

            while(hll2!==null){
                hn.next = new ListNode(hll2.val);
                hll2 = hll2.next;
                hn = hn.next
            }
            return node.next;
        }

      
        
        let list1 = lists[0];
        for(let i=1;i<lists.length;i++){
            list1 = mergeList(list1, lists[i]);
        }
        return list1 || [];
    }
}
