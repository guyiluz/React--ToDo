var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('uuid')







var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted:false,
      searchText:"",
      todos: [
        {
          id: uuid(),
          text: 'Walk the dog',
          completed: true
        }, {
          id: uuid(),
          text: 'Clean the yard',
            completed: true
        }, {
          id: uuid(),
          text: 'Leave mail on porch',
            completed: true
        }, {
          id: uuid(),
          text: 'Play video games',
            completed: false
        }
      ]
    };
  },
  handleAddTodo: function (text) {
    this.setState({
     todos:[
     ...this.state.todos,
    {
    id:uuid(),
    text:text,
    completed: false

    }
     ]
    })
  },

  HandleCheckBox: function (id){
  var updateTodos = this.state.todos.map( function (todo) {
   if(todo.id === id){
    todo.completed=!todo.completed
  }
    return todo

  })
  this.setState({
todo:updateTodos
  })
  },

  handleSearch: function(showCompleted, searchText ){
this.setState({
showCompleted:showCompleted,
searchText: searchText.toLowerCase()


})


  },



  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoSearch OnSearch={this.handleSearch}/>
        <TodoList todos={todos} onCheck={this.HandleCheckBox}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
