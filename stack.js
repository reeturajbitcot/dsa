// push and pop

class Stack {
    constructor() {
        this.item = []
        this.count = 0 
    }
    // add element to top of stack
    push(element){
        this.item[this.count] = element;
        this.count++;
        console.log(`${element} added to ${this.count}`)
        return this.count - 1
    }
    pop(){
        if(this.count === 0) return undefined
        let deleteItem = this.item[this.count - 1];
        this.count -= 1
        console.log(`${deleteItem} removed`)
        return deleteItem
    }
    peek () {
        console.log(`Top element is ${this.items[this.count - 1]}`)
        return this.item[this.count - 1]
    }
    isEmpty() {
        console.log(this.count == 0 ? `Stack is empth`: `Stack is NOT empty`)
        return this.count == 0
    }
    size(){
        console.log(`${this.count} element in stack`)
        return this.count
    }
    print() {
        let str = "";
        for(let i = 0; i < this.count; i++){
            str += this.itme[i] + ' '
        }
        return str
    }

    clear (){
        this.items = []
        this.count = 0
        console.log('Stack cleared ...')
        return this.items
    }
    
}

const stack = new Stack()


stack.push(100)
stack.push(200)
stack.push(300)
stack.pop()