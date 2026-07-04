class Solution {
    addTwoNumbers(l1, l2) {
        let dummy = new ListNode(0);
        let curr = dummy;
        let carry = 0;

        while (l1 || l2 || carry) {
            let v1 = l1 ? l1.val : 0;
            let v2 = l2 ? l2.val : 0;

            let sum = v1 + v2 + carry;
            carry = Math.floor(sum / 10);

            curr.next = new ListNode(sum % 10);
            curr = curr.next;

            if (l1) l1 = l1.next;
            if (l2) l2 = l2.next;
        }

        return dummy.next;
    }
}