class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.head = new DoublyLinkedList();
        this.tail = new DoublyLinkedList();
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.capacity = capacity;
        this.map = {};
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.map[String(key)]){
            let node = this.map[String(key)];
            node.prev.next = node.next;
            node.next.prev = node.prev;
            node.next = this.head.next;
            this.head.next = node;
            node.next.prev = node;
            node.prev = this.head;
            return node.value
        }
        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.map[String(key)]) {
            let node = this.map[String(key)];
            node.value = value;
            node.prev.next = node.next;
            node.next.prev = node.prev;
            node.next = this.head.next;
            this.head.next = node;
            node.next.prev = node;
            node.prev = this.head;
        } else {
            let node = new DoublyLinkedList(key, value);
            node.next = this.head.next;
            this.head.next = node;
            node.prev = this.head;
            node.next.prev = node
            this.map[key]=node;
        }
        if(Object.keys(this.map).length>this.capacity){
            let node = this.tail.prev;
            this.tail.prev = node.prev;
            node.prev.next = this.tail;
            delete this.map[node.key];
        }
        
    }
}

class DoublyLinkedList {
    constructor(key = -1, val = -1, next = null, prev = null) {
        this.key = key;
        this.value = val;
        this.next = next;
        this.prev = prev;
    }
}
