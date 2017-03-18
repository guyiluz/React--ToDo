var React = require('react');
var moment=require('moment')

var Todo = React.createClass({

  render: function () {
    var {id, text,completed, CreatedAt, CompletedAt} = this.props;
    var todoClassName= completed ? 'todo-todo-completed': 'todo'
    var renderDate = () => {
  var message = 'Created At:  ';
  var timestamp = CreatedAt;

  if(completed){
  message ='completed At:  '
  timestamp =CompletedAt

  }
  return    message  +moment.unix(timestamp).format('MMM Do YYYY @ h:mm a')
}
return (
    <div className={todoClassName} onClick={() => {
          this.props.onCheck(id);
      }}>
      <div>
        <input type="checkbox" checked={completed}/>
      </div>
      <div>
        <p>{text}</p>
        <p className="todo__subtext">{renderDate()}</p>
      </div>
    </div>
  )
}
});

module.exports = Todo;
