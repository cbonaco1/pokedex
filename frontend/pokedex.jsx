var React = require('react');
var ReactDOM = require('react-dom');

var Pokedex = React.createClass({
  render: function(){
      return(
        <div>
          Pokedex!!!
        </div>
      );
  }
});

document.addEventListener("DOMContentLoaded", function(event){
  ReactDOM.render(<Pokedex />, document.getElementById("root"));
});
