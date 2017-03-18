var React = require('react');
var uuid = require('uuid')
var moment=require('moment')


var TodoAPI=require('TodoAPI')
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');








var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted:false,
      searchText:"",
      todos: TodoAPI.getTodos()
    }
  },

componentDidUpdate: function () {
TodoAPI.setTodos(this.state.todos)


},

  handleAddTodo: function (text) {
    this.setState({
     todos:[
     ...this.state.todos,
    {
    id:uuid(),
    text:text,
    completed: false,
    CreatedAt:moment().unix(),
    CompletedAt:undefined

    }
     ]
    })
  },

  handleCheckBox: function (id){
  var updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        todo.CompletedAt=todo.completed ? moment().unix():undefined
      }

      return todo;
    });

  this.setState({
todo:updatedTodos
  })
  },

  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },





  render: function () {
    var {todos, showCompleted, searchText} = this.state;

    var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
     var x = TodoAPI
    var  mydave =3
    return (

      <div>
      <h1 className="page-title">Todo App </h1>
      <div   className="row">
        <div   className="column small-centered small-11 medium-6 large-5">
            <div   className="row">
              <div className ="container">
              <TodoSearch OnSearch={this.handleSearch}/>
              <TodoList todos={filteredTodos} onCheck={this.handleCheckBox}/>
              <AddTodo onAddTodo={this.handleAddTodo}/>

            </div>
      </div>
      </div>
      </div>
        </div>
    )
  }
});

module.exports = TodoApp;
