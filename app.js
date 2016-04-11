todoVue = new Vue({
  el: '#todos',
  data: {
    newTodo: { name: '', description: '', date: '', completed: false },
    todos: [],
    completedHidden: false
  },
  ready: function() { 
    console.log('Page ready');
  },
  methods: {
    addTodo: function(event) {
      if(this.newTodo.name) {
        this.todos.push(this.newTodo);
        this.newTodo = { name: '', description: '', date: '', completed: false };
      }
    },
    deleteTodo: function(index) {
      this.todos.splice(index, 1);
    },
    todoIncomplete: function(todo) {
      return !todo.completed;
    },
    clearCompleted: function() {     
      this.todos = this.todos.filter(this.todoIncomplete);
    }
  }
});