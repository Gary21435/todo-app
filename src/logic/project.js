export class Project {
    constructor(name, id=crypto.randomUUID(), todos=[], complete = false) {
       //Object.assign(this, { name }); 
       this.name = name;
       this.id = id;
       this.todos = todos;
       this.complete = complete;
    }

    toggle() {
        this.complete = !this.complete;
    }

    editName(newName) {
        this.name = newName;
    }

    addTodo(todo) {
        this.todos.push(todo); 
        // function to push in UI 
    }

    removeTodo(id) {
        const index = this.todos.indexOf(this.todos.find(obj => obj.id === id)); // remove todo by title
        this.todos.splice(index, 1);
    }

    giveTodos() {
        return [...this.todos];
    }
}