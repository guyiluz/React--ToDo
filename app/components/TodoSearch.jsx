var React = require('react');

var TodoSearch= React.createClass({


handleSearch:function() {

var showCompleted = this.refs.showCompleted.checked;
var searchText=this.refs.searchText.value
this.props.OnSearch(showCompleted, searchText)

},



render: function (){
  return (
    <div>
      <div>

    <input type="search" ref="searchText"
       placeholder="search todos" onChange={this.handleSearch}/>
      </div>
  <label>   <input type="checkbox" ref="showCompleted"   onChange={this.handleSearch} />
Show Completed Todos
 </label>
    </div>

  )

}


})













module.exports=TodoSearch;
