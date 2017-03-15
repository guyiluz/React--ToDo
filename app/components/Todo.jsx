var React = require('react');

var Todo = React.createClass({

  render: function () {
    var {id, text,completed} = this.props;

    return (
      <div onClick={()=>{
      this.props.onCheck(id)

      }}>
        <input type="checkbox" checked={completed} ref="showCompleted" />
        {text}
      </div>
    )
  }
});

module.exports = Todo;
