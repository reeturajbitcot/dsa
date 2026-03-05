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

function celebrity(mat) {
  let n = mat.length;

  // indegree and outdegree array
  let indegree = new Array(n).fill(0);
  let outdegree = new Array(n).fill(0);

  // query for all edges
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let x = mat[i][j];

      // set the degrees
      outdegree[i] += x;
      indegree[j] += x;
    }
  }

  // find a person with indegree n-1
  // and out degree 0
  for (let i = 0; i < n; i++)
    if (indegree[i] === n && outdegree[i] === 1) return i;

  return -1;
}

// Driver Code
let mat = [
  [1, 1, 0],
  [0, 1, 0],
  [0, 1, 1],
];
console.log(celebrity(mat));
