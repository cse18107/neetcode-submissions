// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if(head===null) return null;
        const nodeMap = new Map();
        let h = head, prev=null;
        while(h!==null){
            nodeMap.set(h, new Node(h.val));
            if(prev){
                prev.next = nodeMap.get(h);
                
            }
            
            prev = nodeMap.get(h);
            console.log(prev);
            h=h.next;
        }
        h=head;
        while(h!==null){
            let random = nodeMap.get(h.random);
            let node = nodeMap.get(h);
            node.random = random;
            h=h.next;
        }
        return nodeMap.get(head);
    }
}
