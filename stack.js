class NewNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  push(element) {
    const newN = new NewNode(element);
    newN.next = this.head;
    this.head = newN;
    this.length++;
  }
  pop() {
    if (this.length === 0) {
      console.log("empty stack");
      return;
    } else {
      const removingNode = this.head.value;
      this.head = this.head.next;
      this.length--;
      return removingNode;
    }
  }
  peek() {
    return this.length === 0 ? null : this.head.value;
  }

  isEmpty() {
    return this.length === 0 ? true : false;
  }
  getSize() {
    return this.length;
  }
  printStack() {
    let currentValue = this.head;
    const values = [];
    while (currentValue) {
      values.push(currentValue.value);
      currentValue = currentValue.next;
    }
    console.log(values);
    return values;
  }
}

const ourStack = new Stack();
ourStack.push(5);
ourStack.push(4);
ourStack.push(3);
ourStack.push(2);
ourStack.push(1);
ourStack.pop();
ourStack.pop();
ourStack.printStack();
