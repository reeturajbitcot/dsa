class Node {
    constructor(data, next=null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedeList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    // insert first node
    insertFirst (data) {
        this.head = new Node(data, this.head)
        this.size++
    }
    // insert last node
    insertLast (data) {
        let node = new Node(data)
        let current;

        // if empty, make head
        if(this.head === null) {
            this.head = node
        }else {
            current = this.head
            while (current.next){
                current = current.next
            }
            
            current.next = node;
        }
        this.size++
    }
    // insert at index
    insertAt(data, index){
        if(index >  0 && index > this.size){
            return;
        }
        if(index === 0){
            this.insertFirst(data)
        }else if (index === this.size){
            this.insertLast(data)
        }else {
            const node = new Node(data);
            let current, previous;

            current = this.head;
            let count = 0;
            while(count< index){
                previous = current;
                count++
                current = current.next
            }
            node.next=  current
            previous.next = node
             
        }
        this.size++
    }
    // get at index
    getAt(index){
        if(index > 0 && index > this.size){
            return
        }else{
            let current= this.head
            let count = 0
            while (count <= index){
                if(count == index){
                    console.log(current.data)
                }
                count++;
                current = current.next
            }
        }
        return null
    }
    // remove at index
    removeAt (index) {
        if(index> 0 && index > this.size){
            return 
        }
        let current = this.head;
        let previous;
        let count = 0
        if(index === 0){
            this.head = current.next
        }else {
            while (count < index){
                count++
                previous = current;
                current = current.next;
            }

            previous.next = current.next;
        }
        this.size--
    }
    // clear list
    clearList() {
        this.head = null;
        this.size = 0;
    }
    // print list data
    printList () {
        let current = this.head;

        while(current){
            console.log(current.data)
            current = current.next;
        }
    }
}

const ll = new LinkedeList();

ll.insertFirst(10)
ll.insertFirst(8)
ll.insertFirst(6)

ll.insertLast(12)

ll.insertAt(14, 4)
ll.clearList()

ll.getAt(10)

ll.printList()
