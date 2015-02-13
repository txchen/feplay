<todo>
  <section id="todoapp">
    <header id="header">
      <h1>todos</h1>
      <input id="new-todo" autofocus autocomplete="off" placeholder="What needs to be done?"
        onkeyup={ addTodo }>
    </header>
    <section id="main" show={ todos.length }>
      <input id="toggle-all" type="checkbox" checked={ allDone } onclick={ toggleAll }>
      <ul id="todo-list">
        <todoitem each={ t, i in filteredTodos() } data={ t }>
        </todoitem>
      </ul>
    </section>
    <footer id="footer" show={ todos.length }>
      <span id="todo-count">
        <strong>{ remaining }</strong> items left
      </span>
      <ul id="filters">
        <!-- TODO: change to string after riot fixes the bug -->
        <li><a class={ selected: activeFilter == all } href="#/all">All</a></li>
        <li><a class={ selected: activeFilter == active } href="#/active">Active</a></li>
        <li><a class={ selected: activeFilter == completed } href="#/completed">Completed</a></li>
      </ul>
      <button id="clear-completed" onclick={ removeCompleted } show={ todos.length > remaining }>
        Clear completed ({ todos.length - remaining })</button>
    </footer>
  </section>
  <footer id="info">
    <p>Double-click to edit a todo</p>
    <p>Written by <a href="http://github.com/txchen">Tianxiang Chen</a></p>
    <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
  </footer>

  <script>
  var self = this
  self.todos = opts.data || []
  self.activeFilter = 'all'

  self.on('update', function() {
    self.remaining = self.todos.filter(function(t) { return !t.completed}).length
    self.allDone = self.remaining == 0
    todoStorage.save(self.todos)
  })

  filteredTodos() {
    if (self.activeFilter == 'active') {
      return self.todos.filter(function(t) {
        return !t.completed
      })
    } else if (self.activeFilter == 'completed') {
      return self.todos.filter(function(t) {
        return t.completed
      })
    } else {
      return self.todos
    }
  }

  addTodo(e) {
    if (e.which == 13) {
      var value = e.target.value && e.target.value.trim()
      if (!value) {
        return
      }
      self.todos.push({ title: value, completed: false })
      e.target.value = ''
    }
  }

  removeTodo(e) {
    console.log('remove todo')
    self.todos.some(function (t) {
      if (e.item === t) {
        self.todos.splice(self.todos.indexOf(t), 1)
      }
    })
  }

  toggleTodo(e) {
    e.item.completed = !e.item.completed
    self.update()
    return true
  }

  toggleAll(e) {
    self.todos.forEach(function (t) {
      t.completed = e.target.checked
    })
    self.update()
    return true
  }

  removeCompleted(e) {
    self.todos = self.todos.filter(function(t) {
      return !t.completed
    })
  }

  riot.route(function(base, filter) {
    self.activeFilter = filter
    self.update()
  })
  </script>
</todo>

<todoitem>
  <li class={ completed: todo.completed, editing: editing, todo: true }>
    <div class="view">
      <input class="toggle" type="checkbox" checked={ todo.completed } onclick={ toggleTodo }>
      <label ondblclick={ editTodo }>{ todo.title }</label>
      <button class="destroy" onclick={ parent.removeTodo }></button>
    </div>
    <input name="todoeditbox" class="edit" type="text" onblur={ doneEdit } onkeyup={ editKeyUp }>
  </li>
  <script>
  var self = this
  self.todo = opts.data
  self.editing = false

  toggleTodo(e) {
    console.log(self.parent)
    self.todo.completed = !self.todo.completed
    riot.update()
    return true
  }

  editTodo(e) {
    self.editing = true
    self.todoeditbox.focus()
    self.todoeditbox.value = self.todo.title
  }

  doneEdit(e) {
    console.log('blur')
    self.editing = false
    self.todo.title = self.todoeditbox.value || self.todo.title
    console.log('done ' + self.todo.title)
  }

  editKeyUp(e) {
    if (e.which == 13) {
      self.editing = false
    } else if (e.which == 27) {
      self.todoeditbox.value = self.todo.title
      self.editing = false
    }
  }
  </script>
</todoitem>
