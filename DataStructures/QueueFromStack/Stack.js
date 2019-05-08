class Stack {

    constructor() {
        this.data = [];
    }

    pop(record) {
        return this.data.pop(record);
    }

    push(record) {
        this.data.push(record);
    }

    peek() {
        return this.data[this.data.length - 1];
    }

}

module.exports = Stack;