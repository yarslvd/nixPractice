'use strict'

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class circleArray {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    add(value) {
        let node = new Node(value);
        let curr;

        if(this.head === null) {
            this.head = node;
            this.tail = node;
        }
        else {
            curr = this.head;
            while(curr !== this.tail) {
                curr = curr.next;
            }
            curr.next = node;
            this.tail = node;
            this.tail.next = this.head;
        }
        this.size++;
    }

    get(index) {
        if(this.head === null || this.tail === null) {
            return -1;
        }
        let count = 0;
        let curr = this.head;
        if(index < 0) {
            while(index < 0) {
                index = this.size + index;
            }
        }

        while(curr) {
            if(count === index) {
                return curr.value;
            }
            curr = curr.next;
            count++;
        }
    }
}

let ll = new circleArray();
ll.add("Київ");
ll.add("Харків");
ll.add("Херсон");

// TESTS
console.log('------------------CIRCLE ARRAY------------------');
console.log(ll.get(4)); // Харків
console.log(ll.get(-1)); // Херсон
console.log(ll.get(-4)); // Херсон
console.log(ll.get(0)); // Київ
console.log(ll.get(10)); // Харків
console.log('\n');