class Stack {

    constructor() {
        this.data = [];
    }
    pop(result) {
        return this.data.pop(result)
    }
    push(result) {
        this.data.push(result)
    }
    peek() {
        return this.data[this.data.length - 1];
    }
}

module.exports = Stack;