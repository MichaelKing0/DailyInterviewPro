class ListNode {
  constructor(x) {
    this.val = x;
    this.next = null;
  }

  printList() {
    let node = this;
    let output = '';
    while (node) {
      output += node.val;
      output += ' ';
      node = node.next;
    }
    console.log(output);
  }

  reverseIteratively(head) {
    let prev = null;
    let curr = head;
    let next = null;
    
    while (curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
  }

  reverseRecursively(head) {

  }
}

const testHead = new ListNode(4);
const node1 = new ListNode(3);
testHead.next = node1;
const node2 = new ListNode(2);
node1.next = node2;
const node3 = new ListNode(1);
node2.next = node3;
const testTail = new ListNode(0);
node3.next = testTail;

console.log("Initial list: ");
testHead.printList();
testHead.reverseIteratively(testHead);
console.log("List after reversal: ");
testTail.printList();