const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = new ListNode(null)
    this.tail = this.head
  }
  getUnderlyingList() {
    return this.head
  }

  enqueue(e) {
    if (this.head.value === null) this.head.value = e
    else {
      this.tail.next = new ListNode(e)
      this.tail = this.tail.next
    }
  }

  dequeue() {
    let e = this.head.value;
    this.head = this.head.next
    return e
  }
}

module.exports = {
  Queue
};
