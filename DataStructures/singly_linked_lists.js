// piece of data - val
// reference to the next node - next

// 1. will take a value as constructor param
// 2. will have a value that's given as argument
// 3. will have a next value that's always null since each node will be the last.
    //
class Node {
    constructor (val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    // the list will start with no head, tail or length
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // 1. create new Node
    // 2. if there is no head set the node as the head and tail
    // 3. if there is a head sed the tail next to the new node
    // and the tail itself to the new node
    // 4. increment the length
    // 5. return the singly linked list which is owned by this keyword.
    push(val) {
        const vtx = new Node(val)
        if (!this.head) this.head = vtx
        if (!this.tail) this.tail = vtx
        else {this.tail.next = vtx; this.tail = vtx}
        this.length += 1;
        return this;
    }

    // if there is no head, the list is empty - return undefined.
    // 1. declare current which is the head
    // 2. find special case where length is 1, set head and tail to null
    // length to 0 and return current.
    // 3. declare the next which is head.next
    // 4. loop until next.next is null
    // 5. set tail to current, tail.next to null, decrease length, return next
    pop() {
        if (!this.head) return undefined;

        let current = this.head;
        if (this.length <=  1) {
            this.head = null
            this.tail = null;
            this.length = 0;
            return current;
        }

        let next = current.next;
        while (next.next) {
            current = next;
            next = current.next;
        }
        this.tail = current;
        this.tail.next = null;
        this.length -= 1;
        return next;
    }



    // 1. return undefined if head is null
    // 2. declare head
    // 3. if the list has 1 item, set head and tail to null & length to 0, return current.
    // 4. set the head to head.next
    // 5. decrease length
    // 6. return current
    shift () {
        if (!this.head) return undefined;
        const current = this.head;
        this.head = this.head.next;
        this.length --;
        if (this.length == 0) this.tail = null;

        return current;
    }

    unshift (value) {
        const newHead = new Node(value);
        if (!this.head) this.tail = newHead;
        newHead.next = this.head;
        this.head = newHead;
        this.length ++;
        return this;
    }

    get(index) {
        if (index < 0 || index > this.length) return null;

        let current = this.head;
        while (index > 0) {
            current = current.next;
            index --;
        }
        return current;
    }

    set(index, value){
        const node = this.get(index)
        if (!node) return false;
        node.val = value;
        return true;
    }

    // NOT WORKING, or later.
    insert(index,value){
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(value);
        if (index === 0) return !!this.unshift(value);

        const newNode = new Node(value);
        let prev = this.get(index-1);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;

        this.length ++;
        return true;
    }

}


let list = new SinglyLinkedList();
list.push('Hello');
list.push('There');
list.push('I wonder');
list.unshift('thing');
list.set(4, 'hmm');
list.insert(0, 'yolo');
console.log(list.get(0));
console.log(JSON.stringify(list));
