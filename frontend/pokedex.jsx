var React = require('react');
var ReactDOM = require('react-dom');
var PokemonsIndex = require('./components/pokemonsIndex');

var Pokedex = React.createClass({
  render: function(){
      return(
        <PokemonsIndex />
      );
  }
});

document.addEventListener("DOMContentLoaded", function(event){
  ReactDOM.render(<Pokedex />, document.getElementById("root"));
});
