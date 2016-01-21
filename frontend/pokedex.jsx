var React = require('react');
var ReactDOM = require('react-dom');
var apiUtils = require('./util/apiUtil');
PokemonStore = require('./stores/pokemonStore');

var Pokedex = React.createClass({
  render: function(){
      return(
        <div>
          Pokedex!!!
          { apiUtils.fetchAllPokemon() }
          { PokemonStore.all() }
        </div>
      );
  }
});

document.addEventListener("DOMContentLoaded", function(event){
  ReactDOM.render(<Pokedex />, document.getElementById("root"));
});
