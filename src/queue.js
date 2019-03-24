const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	

	constructor(maxSize) {
        this.maxSize = maxSize || 30;
        this.head = null;
        this.end = null;
        this.length = 0;
	}

	push(data, priority) {
        if(priority < 0 || priority > this.maxSize)
            throw Error();

        let node = new Node(data, priority);

        if( this.length === 0){
            this.head = node;
            this.end = node;
        } else {
            this.end = node;
        }

        this.length++;
	}

	shift() {
        if (this.length === 0){
            throw Error();
        }

        let value = this.head.data;
        this.head = this.head.next;
        return value;
	}

	size() {
        return this.maxSize;
	}

	isEmpty() {
		return this.length === 0;
	}
}

class Node {
    constructor(data, priority){
        this.data = data;
        this.priority = priority;
        this.next = null;
    }
}

module.exports = PriorityQueue;
