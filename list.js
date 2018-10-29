class List {
    constructor() {
        this.memory = [];
        this.length = 0;
    }

    get(address) {
        return this.memory[address];
    }

    push(value) {
        this.memory[this.length] = value;
        this.length++;
    }

    pop() {
        if (this.length === 0) {
            return;
        }

        let currentIndex = this.length - 1;
        let value = this.memory[currentIndex];

        // We could use splice but we are avoiding native methods here, so, we'll implement the array-length trick
        // This will actually delete the value from array and will not leave undefined at that index in case of using `delete`
        this.memory.length = currentIndex;
        this.length--;

        return value;
    }

    unshift(value) {
        for (let i = this.length; i >= 1; i--) {
            this.memory[i] = this.memory[i - 1];
        }

        this.memory[0] = value;
        this.length++;
    }

    shift() {
        let value = this.memory[0];

        for (let i = 1; i < this.length; i++) {
            this.memory[i - 1] = this.memory[i];
        }

        delete this.memory[this.length - 1];
        this.length--;

        return value;
    }
}
