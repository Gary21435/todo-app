export class Todo {
    constructor(title, description, dueDate, priority, id) {
        Object.assign(this, { title, description, dueDate, priority, id });
        this.complete = false;
    }
    
    toggle() {
        this.complete = !this.complete;
    }
}