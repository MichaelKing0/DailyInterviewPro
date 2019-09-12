class ListNode {
  constructor(x) {
    this.val = x;
    this.next = null;
  }
}

class Solution {
  addTwoNumbers(l1, l2, c = 0) {
    // Convert the linked list to an array as it's easier to work with for this operation
    let number1 = [], number2 = [];

    let current = l1;
    while (current) {
      number1.unshift(current.val);
      current = current.next;
    }

    current = l2;
    while (current) {
      number2.unshift(current.val);
      current = current.next;
    }

    // Get the final number
    let finalNumber = (parseInt(number1.join('')) + parseInt(number2.join(''))).toString();

    // Build the final linked list
    let finalList;
    for (let i = 0; i < finalNumber.length; i++) {
      const node = new ListNode(finalNumber[i]);
      node.next = finalList;
      finalList = node;
    }

    return finalList;
  }
}

l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

result = new Solution().addTwoNumbers(l1, l2);

// Test the result
let expected = new ListNode(7);
expected.next = new ListNode(0);
expected.next.next = new ListNode(8);

while (result) {
  console.log(result.val);
  result = result.next;
}