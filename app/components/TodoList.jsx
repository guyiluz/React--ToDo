var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({


  render: function () {
    var {todos} = this.props;
    var renderTodos = () => {
      if (todos.length===0){
      return(
<p className="container_message">Noting to do:)</p>
)
      }
      return todos.map((todo) => {
        return (

          <Todo key={todo.id} {...todo}  onCheck={this.props.onCheck}/>
        )
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
});

module.exports = TodoList;
