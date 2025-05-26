export class Todo {
    constructor(title, description, dueDate, priority, id, complete = false) {
        Object.assign(this, { title, description, dueDate, priority, id, complete });
    }
    
    toggle() {
        this.complete = !this.complete;
    }
}