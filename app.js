new Vue({
  el: '#todos',
  data: {
    todo: { name: '', description: '', date: '' },
    todos: []
  },
  ready: function() { 
    console.log('Page ready');
  },
  methods: {
    addTodo: function() {
      if(this.todo.name) {
        this.todos.push(this.todo);
        this.todo = { name: '', description: '', date: '' };
      }
    }
  } // methods we want to use in our app
});